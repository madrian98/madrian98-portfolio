import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  // console.log(repos);
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <a href="https://github.com/madrian98" target="_blank" rel="noopener" className={styles.no_color}>
        <div className={styles.user}>
          <div>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={50}
              height={50}
            />
            <h3 className={styles.username}>{user.login}</h3>
          </div>
          <div>
            <h3>{user.public_repos} repos</h3>
          </div>
          <div>
            <h3>{user.followers} followers</h3>
          </div>
        </div>
      </a>
      <div> <center><h3>My Most Popular Repositories on Github</h3></center></div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div><center><h3>My Github Calendar</h3></center></div>
      <br />
      <center>
        <div className={styles.contributions}>
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
            theme={theme}
            hideColorLegend
          />
        </div>
      </center>
    </>
  );
};

export async function getStaticProps() {

  const ignoredRepos = ['awesome-machine-learning', 'Cookbook', 'data-science-ipython-notebooks',
    'Hadoop-book','madrian98','code_snippets','sqlserver-kit','DataScienceR','PythonDataScienceHandbook']
  ;
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );

  
  let repos = await repoRes.json();
  repos = repos

   repos = repos.filter(repo => !ignoredRepos.includes(repo.name));

   const trafficDataPromises = repos.map(async (repo) => {
     const trafficRes = await fetch(
       `https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${repo.name}/traffic/views`,
       {
         headers: {
           Authorization: `token ${process.env.GITHUB_API_KEY}`,
         },
       }
     );
     const trafficData = await trafficRes.json();
     return {
       ...repo,
       traffic: trafficData.count || 0,   
     };
   });
 
   repos = await Promise.all(trafficDataPromises);
 
   repos = repos.sort((a, b) => {
    if (a.traffic === b.traffic) {
      return (b.stargazers_count + b.watchers_count + b.forks_count) - (a.stargazers_count + a.watchers_count + a.forks_count);
    }
    return b.traffic - a.traffic;
  }).slice(0, 8);

  return {
    props: { title: 'GitHub', repos, user },
  };

}

export default GithubPage;