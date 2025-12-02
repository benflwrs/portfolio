import { JSX } from "react";
import ProjectCard from "../projectcard/ProjectCard";
import MainButton from "../buttons/MainButton/MainButton";
import { ProjectData } from "types/ProjectData";
import { DataHandler } from "types/DataHandler";
import { Navigation } from "types/Navigation";

function List(): JSX.Element
{
	const projects = DataHandler.projects;

	// Group by type
	const groupedProjects: { [key: string]: ProjectData[] } = {};
	projects.forEach((project) => {
		const type = project.type || "Other";
		if (!groupedProjects[type]) {
			groupedProjects[type] = [];
		}
		groupedProjects[type].push(project);
	});

	// Sort keys (optional, maybe specific order if needed, for now alphabetical)
	const sortedKeys = Object.keys(groupedProjects).sort();

	// Sort projects within groups by date (newest first)
	sortedKeys.forEach((key) => {
		groupedProjects[key].sort((a, b) => {
			const dateA = new Date(a.completedDate).getTime();
			const dateB = new Date(b.completedDate).getTime();
			return dateB - dateA;
		});
	});

	return(
		<section id="projects">
				<div className="container">
					{/*<h2 className="section-title">Projects</h2>*/}
					{sortedKeys.map((type) => (
						<div key={type} className="project-group">
							<h3 className="project-type-title" style={{textTransform: 'capitalize', marginTop: '2rem', marginBottom: '1rem'}}>{type} Projects</h3>
							<ProjectGrid projects={groupedProjects[type]}></ProjectGrid>
						</div>
					))}
				</div>
			</section>
	);
}

export function ProjectGrid({ projects }: { projects: ProjectData[] }): JSX.Element {
	return (
		<div className="projects-grid">
			{projects.map((project, index) => (
				<ProjectCard
					index={index}
					projectData={project}
				/>
			))
			}
		</div>
	);
}

export default function Projects(): JSX.Element
{
	return(
		<>
			<List></List>
		</>
	);
}


