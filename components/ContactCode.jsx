import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'mateuszadrian33@gmail.com',
    href: 'mailto:mateuszadrian33@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin link',
    href: 'linkedin ref',
  },
  {
    social: 'GitHub',
    link: 'github.com/madrian98',
    href: 'https://github.com/madrian98',
  },
  {
    social: 'Website',
    link: 'madrian98.github.io',
    href: 'https://madrian98.github.io',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       tag: <a>Socials</a>
        </p>
      <p className={styles.line}>
        <span>Mateusz Adrian</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
