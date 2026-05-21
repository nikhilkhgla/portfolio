import type { Project } from '@/react-app/data/projects';
import PipelineFlow from './PipelineFlow';
import StepperFlow from './StepperFlow';
import OrbitFlow from './OrbitFlow';
import JourneyFlow from './JourneyFlow';
import StackFlow from './StackFlow';

const STYLE_LABEL: Record<Project['workflowStyle'], string> = {
  pipeline: 'Pipeline flow',
  stepper: 'Guided process',
  orbit: 'Data hub',
  journey: 'Brand journey',
  stack: 'Architecture stack',
};

export default function ProjectWorkflow({ project }: { project: Project }) {
  const props = {
    steps: project.workflow,
    accent: project.accent,
    accent2: project.accent2 ?? project.accent,
  };

  switch (project.workflowStyle) {
    case 'pipeline':
      return <PipelineFlow {...props} />;
    case 'orbit':
      return <OrbitFlow {...props} />;
    case 'journey':
      return <JourneyFlow {...props} />;
    case 'stack':
      return <StackFlow {...props} />;
    case 'stepper':
    default:
      return <StepperFlow {...props} />;
  }
}

export { STYLE_LABEL };
