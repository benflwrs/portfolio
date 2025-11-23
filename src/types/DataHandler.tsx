
import projectsData from 'data/projects.json';
import globalData from 'data/global.json';

import { ProjectData } from 'types/ProjectData';
import { GlobalData } from 'types/GlobalData';

const projectDataPath = '/data/projects/';
const globalDataPath = '/data/global/';

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

