// pages/ProjectDetail.tsx
import { useParams } from 'react-router-dom';
import { ProjectData } from 'types/ProjectData';
import { DataHandler } from 'types/DataHandler';
import { JSX, useEffect, useMemo, useState } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import './ProjectDetail.css';
import './Markdown.css';
import { ContentSectionType, ProjectContent } from 'types/ProjectContent';
import projectsData from 'data/projects.json';

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
			{/*<ProjectWhatever project={project}></ProjectWhatever>*/}
		</div>
	);
}

type ProjectDetailProps = {
	project: ProjectData;
};

function resolveMarkdownAsset(projectKey: string, originalSrc?: string): string | undefined {
	if (!originalSrc) {
		return undefined;
	}

	return DataHandler.getProjectAsset(projectKey, originalSrc);
}

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

function ProjectDetails(props: ProjectDetailProps): JSX.Element {
	const project: ProjectData = props.project;
	const [contentSections, setContentSections] = useState<ProjectContent[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let cancelled = false;

		const loadContent = async () => {
			try {
				setIsLoading(true);
				setError(null);
				setContentSections([]);

				const sections = await DataHandler.fetchProjectContentFromJson(project.key);

				if (!cancelled) {
					setContentSections(sections);
				}
			} catch (err) {
				if (!cancelled) {
					setError('Unable to load project details right now.');
					setContentSections([]);
				}
			} finally {
				if (!cancelled) {
					setIsLoading(false);
				}
			}
		};

		loadContent();

		return () => {
			cancelled = true;
		};
	}, [project.key]);

	if (isLoading) {
		return <section className="project-details">Loading project details…</section>;
	}

	if (error) {
		return <section className="project-details">Content unavailable</section>;
	}

	return (
		<section className="project-details">
			{contentSections.map((content, index) => (
				<div key={index}>
					{GetProjectSection(project, content)}
				</div>
			))}
		</section>
	);
}



function GetProjectSection(projectData: ProjectData, projectContent:ProjectContent) : JSX.Element
{
	switch(projectContent.sectionType)
	{
		case ContentSectionType.Text:
			return ContentText(projectData, projectContent);
		case ContentSectionType.TextImage:
			return ContentTextImage(projectData, projectContent);
		case ContentSectionType.ImageText:
			return ContentImageText(projectData, projectContent);
		//case ContentSectionType.Image:
		//case ContentSectionType.Carousel:
		case ContentSectionType.Video:
			return ContentVideo(projectData, projectContent);
		default:
			return(<></>);
	}
}

function ContentText(projectData: ProjectData, projectContent:ProjectContent): JSX.Element {
	return (
		<>
			{/* Overview Section */}
			<section className="project-overview">
				<div className="overview-content">
					<ReactMarkdown>{projectContent.markdown}</ReactMarkdown>
				</div>
			</section>
		</>
	);
}

function ContentTextImage(projectData: ProjectData, projectContent:ProjectContent): JSX.Element {
	return (
		<>
			{/* Features Section - Text Left, Image Right */}
			<section className="project-section text-left">
				<div className="section-content">
					<div className="text-block">
						<ReactMarkdown>{projectContent.markdown}</ReactMarkdown>
					</div>
					<div className="image-block">
						<img
							src={DataHandler.getProjectAsset(projectData.key, projectContent.image)}
							alt={projectContent.title || "Game Features"}
						/>
					</div>
				</div>
			</section>
		</>
	);
}

function ContentImageText(projectData: ProjectData, projectContent:ProjectContent): JSX.Element {
	return (
		<>
			{/* Features Section - Image Left, Text Right */}
			<section className="project-section text-right">
				<div className="section-content">
					<div className="image-block">
						<img
							src={DataHandler.getProjectAsset(projectData.key, projectContent.image)}
							alt={projectContent.title || "Game Features"}
						/>
					</div>
					<div className="text-block">
						<ReactMarkdown>{projectContent.markdown}</ReactMarkdown>
					</div>
				</div>
			</section>
		</>
	);
}
function ContentVideo(projectData: ProjectData, projectContent:ProjectContent): JSX.Element {
	return (
		<>
			{/* Video Section */}
			<section className="project-video">
				<div className="video-container">
					<h2>Watch Gameplay</h2>
					<div className="video-wrapper">
						<iframe
							src={`https://www.youtube.com/embed/${projectContent.youtubeLink}`}
							title={`${projectData.title} Gameplay`}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				</div>
			</section>
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

