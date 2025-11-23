// pages/ProjectDetail.tsx
import { useParams } from 'react-router-dom';
import { ProjectData } from 'types/ProjectData';
import { DataHandler } from 'types/DataHandler';
import { JsxElement } from 'typescript';
import { JSX } from 'react';
import './ProjectDetail.css';

export default function ProjectDetail() {
	const { projectId } = useParams<{ projectId: string }>();
//  const project:Project = projects.find(p => p.key === projectId) ;
	const project = DataHandler.projects.find(p => p.key === projectId)

  if (!project) {
    return <div>Project not found</div>;
  }

  return(
		<div className='project-details-container'>
			<ProjectHero project={project}></ProjectHero>
			<ProjectDetails project={project}></ProjectDetails>
		</div>
	);
}

type ProjectDetailProps = {
	project: ProjectData;
};

function ProjectHero(props:ProjectDetailProps) : JSX.Element
{
	const project: ProjectData = props.project;

	return (
		<>
			{/* Hero Section */}
			<section className="project-hero">
				<img
					src={DataHandler.getProjectEyecatcher(project.key)}
					alt="Background"
					className="hero-bg-gif"
				/>
				<div className="hero-content">
					<img
						className="project-logo"
						src={DataHandler.getProjectLogo(project.key)}
						alt={project.title}
					/>
					<p className="hero-description">
						{project.description}
					</p>
				</div>
			</section>
		</>
  	);
}

function ProjectDetails(props:ProjectDetailProps) : JSX.Element
{
	const project: ProjectData = props.project;

	return (
		<>
			{/*<ReactMarkdown></ReactMarkdown>*/}
		</>
  	);
}

function ProjectWhatever(props:ProjectDetailProps) : JSX.Element
{
	const project: ProjectData = props.project;

	return (
		<>
			{/* Overview Section */}
			<section className="project-overview">
				<div className="overview-content">
					<h2>Overview</h2>
					<p>
						{project.title} is a {project.genre} game developed for {project.platform}.
						This project was completed over {project.duration}, showcasing innovative gameplay
						mechanics and polished design.
					</p>
				</div>
			</section>

			{/* Features Section - Text Left, Image Right */}
			<section className="project-section text-left">
				<div className="section-content">
					<div className="text-block">
						<h2>Key Features</h2>
						<p>
							Experience unique gameplay mechanics that set {project.title} apart.
							Built with {project.technologies.join(', ')}, this project demonstrates
					technical excellence and creative vision. Every aspect was carefully crafted
					to deliver an engaging and memorable experience.
				</p>
			</div>
			<div className="image-block">
				<img
					src={DataHandler.getProjectAsset(project.key, 'screenshot1.png')}
					alt="Game Features"
				/>
			</div>
		</div>
	</section>			{/* Development Section - Text Right, Image Left */}
			<section className="project-section text-right">
				<div className="section-content">
					<div className="image-block">
						<img
							src={DataHandler.getProjectAsset(project.key, 'screenshot2.png')}
							alt="Development Process"
						/>
					</div>
					<div className="text-block">
						<h2>Development Journey</h2>
						<p>
							The development process involved careful planning and iteration.
							From initial concept to final release, every decision was made with
							player experience in mind. The result is a polished product that
							showcases both technical skill and creative storytelling.
						</p>
					</div>
				</div>
			</section>

			{/* Video Section */}
			<section className="project-video">
				<div className="video-container">
					<h2>Watch Gameplay</h2>
					<div className="video-wrapper">
						<iframe
							src={`https://www.youtube.com/embed/${getYouTubeId(project.key)}`}
							title={`${project.title} Gameplay`}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				</div>
			</section>
		</>
  	);
}

// Helper function to get YouTube video ID for each project
function getYouTubeId(projectKey: string): string {
	const videoIds: { [key: string]: string } = {
		'solarLeap': 'dQw4w9WgXcQ', // Replace with actual video ID
		'gyaruRPG': 'dQw4w9WgXcQ', // Replace with actual video ID
		'ballinBrawl': 'dQw4w9WgXcQ', // Replace with actual video ID
	};
	return videoIds[projectKey] || 'dQw4w9WgXcQ';
}

