import type { Service, ServiceWorkflowStyle } from '@/react-app/data/services';
import PipelineFlow from './PipelineFlow';
import StepperFlow from './StepperFlow';
import OrbitFlow from './OrbitFlow';
import JourneyFlow from './JourneyFlow';
import StackFlow from './StackFlow';
import ShieldFlow from './ShieldFlow';
import RoboticFlow from './RoboticFlow';
import MachineFlow from './MachineFlow';

const SERVICE_STYLE_LABEL: Record<ServiceWorkflowStyle, string> = {
  pipeline: 'Process pipeline',
  stepper: 'Step-by-step',
  orbit: 'Connected hub',
  journey: 'Build journey',
  stack: 'Layered build',
  shield: 'Security layers',
  robotic: 'Robotic system',
  machine: 'Super machine network',
};

export default function ServiceWorkflow({ service }: { service: Service }) {
  const props = {
    steps: service.workflow,
    accent: service.accent,
    accent2: service.accent2 ?? service.accent,
  };

  switch (service.workflowStyle) {
    case 'pipeline':
      return <PipelineFlow {...props} />;
    case 'orbit':
      return <OrbitFlow {...props} />;
    case 'journey':
      return <JourneyFlow {...props} />;
    case 'stack':
      return <StackFlow {...props} />;
    case 'shield':
      return <ShieldFlow {...props} />;
    case 'robotic':
      return <RoboticFlow {...props} />;
    case 'machine':
      return <MachineFlow {...props} />;
    case 'stepper':
    default:
      return <StepperFlow {...props} />;
  }
}

export { SERVICE_STYLE_LABEL };
