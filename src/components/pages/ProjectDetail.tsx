// pages/ProjectDetail.tsx
import { useParams } from 'react-router-dom';
import { Project } from 'types/Project';
import { DataHandler } from 'types/DataHandler';
import { JsxElement } from 'typescript';
import { JSX } from 'react';

export default function ProjectDetail() {
	const { projectId } = useParams<{ projectId: string }>();
//  const project:Project = projects.find(p => p.key === projectId) ;
	const project = DataHandler.projects.find(p => p.key === projectId)

  if (!project) {
    return <div>Project not found</div>;
  }

  return(
  		<AboutProject project={project}></AboutProject>
	);
}

type ProjectDetailProps = {
	project: Project;
};

function AboutProject(props:ProjectDetailProps) : JSX.Element
{
	const project: Project = props.project;

	return (
	<section id="project-header">
				<img src={DataHandler.getProjectData(project.key, project.eyeCatcherUrl)} alt="Background" className="bg-gif" />
				<div className="about-content">
					<img src="" alt={project.title} className="project-logo" />
					<p className="project-description">
						{project.description}
					</p>
				</div>
	</section>
  );
}
