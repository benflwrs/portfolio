import projectsData from 'data/projects/projects.json';
import { Project } from 'types/Project';

export class DataHandler
{
	static projects: Project[] = projectsData;

	constructor() { }
}
