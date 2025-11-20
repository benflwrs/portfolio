import { JSX } from "react";
import ProjectCard from "../projectcard/ProjectCard";
import MainButton from "../buttons/MainButton/MainButton";
import { Project } from "types/Project";
import { DataHandler } from "types/DataHandler";
import { Navigation } from "types/Navigation";

function List(): JSX.Element
{
	return(
		<section id="projects">
				<div className="container">
					<h2 className="section-title">Projects</h2>
					<ProjectGrid projects={DataHandler.projects}></ProjectGrid>
				</div>
			</section>
	);
}

export function ProjectGrid({ projects }: { projects: Project[] }): JSX.Element {
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
