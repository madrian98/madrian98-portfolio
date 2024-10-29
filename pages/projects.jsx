import ProjectCard from '../components/ProjectCard';
import { getPythonProjects } from './api/pythonProjects';
import { getJavaProjects } from './api/javaProjects';
import { getJupyterProjects } from './api/jupyterProjects';
import styles from '../styles/ProjectsPage.module.css';


const ProjectsPage = ({ python_projects, java_projects, jupyter_projects }) => {
  return (
    <>
    <h3>Projects</h3>
    <br/>
    <center><h4>Python</h4></center>
    <hr/>
    <div className={styles.container}>
      {python_projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    <center><h4>Java</h4></center>
    <hr/>
    <div className={styles.container}>
      {java_projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    <center><h4>Jupyter Notebook</h4></center>
    <hr/>
    <div className={styles.container}>
      {jupyter_projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </>
  );
};

export async function getStaticProps() {
  const python_projects = getPythonProjects();
  const java_projects = getJavaProjects();
  const jupyter_projects = getJupyterProjects();

  return {
    props: { title: 'Projects', python_projects, java_projects, jupyter_projects },
  };
}

export default ProjectsPage;
