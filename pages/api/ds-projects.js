import data from './ds-projects.json';

export const getDSProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getDSProjects();
  res.json(projects);
};
