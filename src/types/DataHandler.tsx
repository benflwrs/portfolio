
import projectsData from 'data/projects/projects.json';
//import projectsData from '../../public/data/projects.json';
import { Project } from 'types/Project';
const projectDataPath = '/data/projects/';


export class DataHandler
{
	static projects: Project[] = projectsData;

	static getProjectData(projectKey: string, dataName:string)
	{
		return `${process.env.PUBLIC_URL}${projectDataPath}/${projectKey}/${dataName}`;
	}

	constructor() { }
}
