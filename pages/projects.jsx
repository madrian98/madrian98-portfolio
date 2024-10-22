import ProjectCard from '../components/ProjectCard';
import { getMainProjects } from './api/Main-projects';
import { getMiscProjects } from './api/misc-projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ main_projects, misc_projects }) => {
  return (
    <>
      <h3>Projects</h3>
      <br/>
      <center><h4>Main projects</h4></center>
      <hr/>
      <div className={styles.container}>
        {main_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const main_projects = getMainProjects();
  const misc_projects = getMiscProjects();

  return {
    props: { title: 'Projects', main_projects, misc_projects },
  };
}

export default ProjectsPage;
