import ProjectCard from '../components/ProjectCard';
import { getDSProjects } from './api/ds-projects';
import { getMiscProjects } from './api/misc-projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ ds_projects, misc_projects }) => {
  return (
    <>
      <h3>Projects</h3>
      <br/>
      <center><h4>Data Science/Machine Learning</h4></center>
      <hr/>
      <div className={styles.container}>
        {ds_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <center><h4>Misc projects</h4></center>
      <hr/>
      <div className={styles.container}>
        {misc_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const ds_projects = getDSProjects();
  const misc_projects = getMiscProjects();

  return {
    props: { title: 'Projects', ds_projects,misc_projects },
  };
}

export default ProjectsPage;
