import { createSelector } from 'reselect';

const getLoading = (state) => state.projects.loading;
const getProjects = (state) => state.projects.projects;

export const ProjectSelector = createSelector(
  [getLoading, getProjects],
  (loading, projects) => ({
    loading,
    projects
  })
);
