import React, { JSX } from 'react';
import './ProjectCard.css';
import { ProjectData } from 'types/ProjectData';
import { Navigation } from 'types/Navigation';
import CustomLink from 'components/CustomLink';
import { DataHandler } from 'types/DataHandler';

type ProjectCardProps = {
    index?: number;
    href?: string;
    projectData: ProjectData;
    onClick?: () => void;
};

const projectURL = "/projects/"

const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
	e.preventDefault();

	Navigation.To(id);
};

export default function ProjectCard({
    index = 1,
	href,
    //onClick,
    projectData,
}: ProjectCardProps): JSX.Element {

	const onClick = (e:React.MouseEvent<HTMLDivElement>) => handleLinkClick(e, `${projectURL}${projectData.key}`);
    const inner = (
        <div
            className="project-card dyn-element"
            role='button'
            tabIndex={index}
            //onClick={onClick}
            //onKeyDown={(e) => { if (e.key === 'Enter' && onClick) onClick(e as any); }}
        >
            <div className="project-thumbnail dyn-element">
                    <img
                        src={DataHandler.getProjectEyecatcher(projectData.key)}
                        //alt={String(index).padStart(2, '0')}
                    />
            </div>
            <div className="project-info dyn-element">
                <div className="project-header">
                    <h3>{projectData.title}</h3>
                    <span className="project-date">
                        {new Date(projectData.completedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                </div>
                <p className='platform'>{projectData.platform}</p>
                <p className='description'>{projectData.description}</p>
				<div className="technologies">
					{projectData.technologies.map(name => (
						<span className="tech-tag">{name}</span>
					))}
				</div>
            </div>
        </div>
    );

    //if (true) {
        return (
            <CustomLink className="project-link" to={`${projectURL}${projectData.key}`}>
                {inner}
            </CustomLink>
        );
    //}

    //return inner;
}
