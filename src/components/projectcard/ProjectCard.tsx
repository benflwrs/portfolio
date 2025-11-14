import React, { JSX } from 'react';
//import './ProjectCard.css';

type ProjectCardProps = {
    title: string;
    description: string;
    thumbnail?: React.ReactNode;
    index?: number;
    href?: string;
    onClick?: () => void;
};

export default function ProjectCard({
    title,
    description,
    thumbnail,
    index = 1,
    href,
    onClick,
}: ProjectCardProps): JSX.Element {
    const inner = (
        <div
            className="project-card"
            role={onClick ? 'button' : undefined}
            tabIndex={0}
            onClick={onClick}
            onKeyDown={(e) => { if (e.key === 'Enter' && onClick) onClick(); }}
        >
            <div className="project-thumbnail">
                {thumbnail ?? String(index).padStart(2, '0')}
            </div>
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
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
