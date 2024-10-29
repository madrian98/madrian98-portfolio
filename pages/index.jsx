import Link from 'next/link';
//import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Data Science</h1>
          <h1>Big Data</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Mateusz Adrian</h1>
            <h6 className={styles.bio}>Data developer</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Keywords</h4>
                  <div className={styles.tags}>
                    <span key='Python' className='Python'>
                      Python
                    </span>
                    <span key='Java' className='Java'>
                      Java
                    </span>
                    <span key='SQL' className='SQL'>
                      SQL
                    </span>
                    <span key='Data-Science' className='Data-Science'>
                      Data-Science
                    </span>
                    <span key='Data-Mining' className='Data-Mining'>
                      Data-Mining
                    </span>
                    <span key='Data-Engineering' className='Data-Engineering'>
                      Data-Engineering
                    </span>
                    <span key='Data-Analytics' className='Data-Analytics'>
                     Data-Analytics
                    </span>
                    <span key='Big-Data' className='Big-Data'>
                    Big-Data
                    </span>
                    <span key='Machine-Learning' className='Machine-Learning'>
                    Machine-Learning
                    </span>
                    <span key='Software Engineering' className='Software-Engineering'>
                    Software-Engineering
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about">
              <button className={styles.button}>About Me</button>
            </Link>
            { <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> }
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <div className={styles.right}>
            <div className={styles.picture_boader}>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
