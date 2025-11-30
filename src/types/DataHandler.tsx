
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

	static async fetchProjectContentFromJson(projectKey: string, fileName = 'content.json'): Promise<ProjectContent[]> {
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
				const markdown = await DataHandler.fetchProjectContent(projectKey);
				content.markdown = markdown;
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

