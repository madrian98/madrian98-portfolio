import data from './pythonProjects.json';

export const getPythonProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getPythonProjects();
  res.json(projects);
};
