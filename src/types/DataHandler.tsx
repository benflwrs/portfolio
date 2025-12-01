
import projectsData from 'data/projects.json';
import globalData from 'data/global.json';

import { ProjectData } from 'types/ProjectData';
import { GlobalData } from 'types/GlobalData';
import { ContentSectionType, ProjectContent } from 'types/ProjectContent';

const projectDataPath = '/data/projects/';
const globalDataPath = '/data/global/';

function isHtmlDocumentResponse(contentType: string | null, text: string): boolean {
	const normalizedType = contentType?.toLowerCase() ?? '';
	if (normalizedType.includes('text/html')) {
		return true;
	}

	const snippet = text.trimStart().slice(0, 32).toLowerCase();
	return snippet.startsWith('<!doctype html') || snippet.startsWith('<html');
}

export class DataHandler
{
	static global: GlobalData = globalData;
	static projects: ProjectData[] = projectsData;

	//Project

	static getProjectAsset(projectKey: string, dataName:string)
	{
		return `${process.env.PUBLIC_URL}${projectDataPath}${projectKey}/${dataName}`;
	}

	static getProjectEyecatcher(projectKey: string)
	{
		return this.getProjectAsset(projectKey, this.global.eyecatcherUrl);
	}

	static getProjectLogo(projectKey: string)
	{
		return this.getProjectAsset(projectKey, this.global.logoUrl);
	}


	static async fetchProjectContent(projectKey: string): Promise<string> {
		const candidates = ['content.md', 'content.mdx'];

		for (const fileName of candidates) {
			const response = await fetch(this.getProjectAsset(projectKey, fileName));
			if (response.ok) {
				const text = await response.text();
				if (isHtmlDocumentResponse(response.headers.get('content-type'), text)) {
					continue;
				}
				return text;
			}
		}

		throw new Error(`Failed to load content for ${projectKey}`);
	}

	static extractMarkdownSection(fullMarkdown: string, sectionId: string): string {
		// Use @Section format as identifier (e.g., "@MyContribution")
		const cleanId = sectionId.startsWith('@') ? sectionId.slice(1) : sectionId;

		// Match HTML comment as section marker: <!-- @SectionId -->
		const markerRegex = new RegExp(`<!--\\s*@${cleanId}\\s*-->`, 'i');
		const match = markerRegex.exec(fullMarkdown);

		if (!match) {
			return fullMarkdown; // If no section found, return full content
		}

		const startIndex = match.index + match[0].length;

		// Find the next section marker
		const nextMarkerRegex = /<!--\s*@\w+\s*-->/;
		const remainingText = fullMarkdown.slice(startIndex);
		const nextMatch = nextMarkerRegex.exec(remainingText);

		const endIndex = nextMatch ? startIndex + nextMatch.index : fullMarkdown.length;

		return fullMarkdown.slice(startIndex, endIndex).trim();
	}	static async fetchProjectContentFromJson(projectKey: string, fileName = 'content.json'): Promise<ProjectContent[]> {
		const jsonPath = this.getProjectAsset(projectKey, fileName);
		const response = await fetch(jsonPath);

		if (!response.ok) {
			throw new Error(`Failed to load ${fileName} for ${projectKey}`);
		}

		const jsonArray: any[] = await response.json();

		if (!Array.isArray(jsonArray)) {
			throw new Error(`Invalid content.json format for ${projectKey}: expected an array`);
		}

		// Convert string sectionType to enum and load markdown content
		const contentArray: ProjectContent[] = [];

		for (const item of jsonArray) {
			// Convert string to enum
			let sectionType: ContentSectionType;
			if (typeof item.sectionType === 'string') {
				sectionType = ContentSectionType[item.sectionType as keyof typeof ContentSectionType];
			} else {
				sectionType = item.sectionType;
			}

			const content: ProjectContent = {
				sectionType,
				title: item.title || '',
				markdown: item.markdown || '',
				image: item.image || '',
				youtubeLink: item.youtubeLink || ''
			};

			// Load markdown content for text-based sections
			if (sectionType === ContentSectionType.Text
				|| sectionType === ContentSectionType.TextImage
				|| sectionType === ContentSectionType.ImageText
			) {
				const fullMarkdown = await DataHandler.fetchProjectContent(projectKey);

				// If markdown field starts with @, treat it as a section identifier
				if (content.markdown.startsWith('@')) {
					content.markdown = DataHandler.extractMarkdownSection(fullMarkdown, content.markdown);
				} else {
					// Otherwise use the full markdown
					content.markdown = fullMarkdown;
				}
			}

			contentArray.push(content);
		}

		return contentArray;
	}

	//Global
	static getGlobalAsset(dataName:string)
	{
		return `${process.env.PUBLIC_URL}${globalDataPath}${dataName}`;
	}

	static getEyecatcher()
	{
		return this.getGlobalAsset(this.global.eyecatcherUrl);
	}

	static getLogo()
	{
		return this.getGlobalAsset(this.global.logoUrl);
	}

	constructor() { }
}

