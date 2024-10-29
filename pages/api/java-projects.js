import data from './java-projects.json';

export const getJavaProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getJavaProjects();
  res.json(projects);
};
