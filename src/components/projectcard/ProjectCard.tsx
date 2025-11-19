import React, { JSX } from 'react';
import './ProjectCard.css';
import { Project } from 'types/Project';

type ProjectCardProps = {
    index?: number;
    href?: string;
    projectData: Project;
    onClick?: () => void;
};

export default function ProjectCard({
    index = 1,
	href,
    onClick,
    projectData,
}: ProjectCardProps): JSX.Element {
    const inner = (
        <div
            className="project-card dyn-element"
            role={onClick ? 'button' : undefined}
            tabIndex={0}
            onClick={onClick}
            onKeyDown={(e) => { if (e.key === 'Enter' && onClick) onClick(); }}
        >
            <div className="project-thumbnail dyn-element">
                {projectData.eyeCatcherUrl ?? String(index).padStart(2, '0')}
            </div>
            <div className="project-info dyn-element">
                <h3>{projectData.title}</h3>
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

    if (href) {
        return (
            <a className="project-link" href={href} target="_blank" rel="noreferrer">
                {inner}
            </a>
        );
    }

    return inner;
}
