import { JSX, useEffect, useState } from "react";

import MainButton from '../buttons/MainButton/MainButton'; // Add this import
import ProjectCard from '../projectcard/ProjectCard'; // Add this import
import { DataHandler } from "types/DataHandler";
import { ProjectData } from "types/ProjectData";
import { ProjectGrid } from "./Projects";

import { useNavigate, useResolvedPath } from "react-router-dom";
import { Navigation } from "types/Navigation";

import './Home.css'
import { Footer, Socials } from "components/Footer";
import { backgroundInfo, heroHome, technologies } from 'data/markdowns/hero-home';
import ReactMarkdown from "react-markdown";
import { SectionSeparator } from "components/Separator";


function About()
{
	return(
	<section id="about">
				<img src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" alt="Background" className="bg-gif" />
				<div className="about-content">
					<ReactMarkdown>{heroHome}</ReactMarkdown>

					<div className="m-3_5rem ">
						<Socials ></Socials>
					</div>
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
							<img src={DataHandler.getGlobalAsset("avatar.jpg")} alt="Profile" />
						</div>
						<div className="background-text">
							<ReactMarkdown>{backgroundInfo}</ReactMarkdown>
						</div>
					</div>
					<div className="technologies">
						{technologies && technologies.map((tech) => (
							//<span key={tech} className="tech-tag">{tech}</span>
							<span className="tech-tag">{tech}</span>
						))}
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
			<SectionSeparator></SectionSeparator>
			<Highlights />
			<SectionSeparator></SectionSeparator>
			<Background />
			<Footer/>
		</>
	);
}
