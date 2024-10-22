import data from './Main-projects.json';

export const getMainProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getMainProjects();
  res.json(projects);
};
