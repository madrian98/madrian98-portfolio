import data from './jupyterProjects.json';

export const getJupyterProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getJupyterProjects();
  res.json(projects);
};
