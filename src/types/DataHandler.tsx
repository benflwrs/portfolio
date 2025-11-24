
import projectsData from 'data/projects.json';
import globalData from 'data/global.json';

import { ProjectData } from 'types/ProjectData';
import { GlobalData } from 'types/GlobalData';

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

	static getProjectContentPath(projectKey: string, fileName = 'content.md')
	{
		return `${process.env.PUBLIC_URL}${projectDataPath}${projectKey}/${fileName}`;
	}

	static async fetchProjectContent(projectKey: string): Promise<string> {
		const candidates = ['content.md', 'content.mdx'];

		for (const fileName of candidates) {
			const response = await fetch(this.getProjectContentPath(projectKey, fileName));
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

