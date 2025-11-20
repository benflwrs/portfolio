// pages/ProjectDetail.tsx
import { useParams } from 'react-router-dom';
import projects from 'data/projects/projects.json';

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.key === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* Render other project details */}
    </div>
  );
}
