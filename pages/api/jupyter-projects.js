import data from './jupyter-projects.json';

export const getJupyterProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getJupyterProjects();
  res.json(projects);
};
