import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Mateusz Adrian's Portfolio."
      />
      <meta
        name="keywords"
        content="keywords keywords"
      />
      <meta property="og:title" content="Mateusz Adrian's Portfolio" />
      <meta
        property="og:description"
        content="Mateusz Adrian's Portfolio."
      />
      <meta property="og:url" content="https://github.com/madrian98/madrian98-portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: '<Mateusz Adrian>',
};
