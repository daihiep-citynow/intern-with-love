import Head from "next/head";

const Home = () => {
  <>
    <Head>
      <title>Intern with Love</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className="grid-container">
      <header className="header-wrapper">header</header>
      <div className="hero-wrapper">hero</div>
      <div className="left-wrapper">left box</div>
      <div className="right-wrapper">right box</div>
      <footer className="footer-wrapper">footer</footer>
    </div>
  </>;
};

export default Home;
