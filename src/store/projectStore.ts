import { create } from 'zustand';

interface ProjectState {
  // Project metadata
  projectName: string;
  projectDescription: string;

  // Actions
  setProjectName: (name: string) => void;
  setProjectDescription: (description: string) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  // Initial state
  projectName: '{{project-name}}',
  projectDescription: '{{project-description}}',

  // Actions
  setProjectName: (name: string) => set({ projectName: name }),
  setProjectDescription: (description: string) =>
    set({ projectDescription: description }),
}));
