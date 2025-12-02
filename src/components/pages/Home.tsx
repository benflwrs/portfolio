import { JSX } from "react";

import MainButton from '../buttons/MainButton/MainButton'; // Add this import
import ProjectCard from '../projectcard/ProjectCard'; // Add this import
import { DataHandler } from "types/DataHandler";
import { ProjectData } from "types/ProjectData";
import { ProjectGrid } from "./Projects";

import { useNavigate, useResolvedPath } from "react-router-dom";
import { Navigation } from "types/Navigation";

import './Home.css'
import { Footer } from "components/Footer";


function About()
{
	return(
	<section id="about">
				<img src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" alt="Background" className="bg-gif" />
				<div className="about-content">
					<h1>Hello, I'm a Programmer</h1>
					<p>I create minimalist digital experiences that blend aesthetics with functionality. Specialized in web design, branding, and user interfaces.</p>
				</div>
	</section>
	);
}

function Highlights()
{
	const highlights:ProjectData[] = DataHandler.projects.slice(-3);
	const navigate = useNavigate();


	return(
		<section id="projects">
				<div className="container">
					<h2 className="section-title">Highlights</h2>
					<ProjectGrid projects={highlights}></ProjectGrid>
					<div className='hor-display m-30px'>
						<MainButton className="see-all-projects" href= {Navigation.GetHashPath('/projects')} onClick={() => Navigation.To('/projects')}>
							See all projects
						</MainButton>
					</div>
				</div>
			</section>
	);
}

function Background()
{
	return(
		<section id="background">
				<div className="container">
					<div className="background-content">
						<div className="profile-image">
							<img src="https://via.placeholder.com/250" alt="Profile" />
						</div>
						<div className="background-text">
							<h2>Background & Education</h2>
							<p>I graduated with a degree in Computer Science, specializing in game development and interactive media. Over the years, I've worked on various projects ranging from indie games to enterprise applications, always focusing on creating elegant and performant solutions.</p>
							<p>My passion lies in bridging the gap between creative vision and technical execution, bringing ideas to life through code and design.</p>
						</div>
					</div>
					<div className="technologies">
						<span className="tech-tag">C#</span>
						<span className="tech-tag">C++</span>
						<span className="tech-tag">Typescript</span>
						<span className="tech-tag">Unreal Engine</span>
						<span className="tech-tag">Unity Engine</span>
						<span className="tech-tag">Godot Engine</span>
						<span className="tech-tag">Git</span>
						<span className="tech-tag">Perforce</span>
					</div>
				</div>
			</section>
	);
}

export default function Home(): JSX.Element
{
	return(
		<>
			<About />
			<Highlights />
			<Background />
			<Footer></Footer>
		</>
	);
}
