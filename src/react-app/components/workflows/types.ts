import type { WorkflowStep } from '@/react-app/data/projects';

export interface FlowProps {
  steps: WorkflowStep[];
  accent: string;
  accent2?: string;
}
