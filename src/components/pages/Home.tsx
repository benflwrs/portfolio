import { JSX } from "react";

import MainButton from '../buttons/MainButton/MainButton'; // Add this import
import ProjectCard from '../projectcard/ProjectCard'; // Add this import
import { DataHandler } from "types/DataHandler";
import { ProjectData } from "types/ProjectData";
import { ProjectGrid } from "./Projects";

import { useNavigate, useResolvedPath } from "react-router-dom";
import { Navigation } from "types/Navigation";

import './Home.css'


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
					</div>
				</div>
			</section>
	);
}

function Contact() {
	return (
		<section id="contact">
			<div className="container">
				<div className="contact-content">
					<h2>Get In Touch</h2>
					<div className="social-links">
						<a href="https://github.com" target="_blank" aria-label="GitHub">
							<svg viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
						<a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
							<svg viewBox="0 0 24 24" fill="currentColor">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
						</a>
						<a href="https://twitter.com" target="_blank" aria-label="Twitter">
							<svg viewBox="0 0 24 24" fill="currentColor">
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
							</svg>
						</a>
						<a href="mailto:hello@email.com" aria-label="Email">
							<svg viewBox="0 0 24 24" fill="currentColor">
								<path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
							</svg>
						</a>
					</div>
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
			<Contact />
		</>
	);
}
