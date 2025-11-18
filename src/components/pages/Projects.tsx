import { JSX } from "react";
import ProjectCard from "../projectcard/ProjectCard";
import MainButton from "../buttons/MainButton/MainButton";

function List()
{
	return(
		<section id="projects">
				<div className="container">
					<h2 className="section-title">Selected Work</h2>
					<div className="projects-grid">
						<ProjectCard
							index={1}
							title="Project Alpha"
							description="A minimalist e-commerce platform focusing on UX and modern UI."
						/>
						<ProjectCard
							index={2}
							title="Project Beta"
							description="A minimalist e-commerce platform focusing on UX and modern UI."
						/>
						<ProjectCard
							index={3}
							title="Project Gamma"
							description="A minimalist e-commerce platform focusing on UX and modern UI."
						/>
					</div>
					{/*<div className='hor-display m-30px'>
						<MainButton> See all projects</MainButton>
					</div>*/}
				</div>
			</section>
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
