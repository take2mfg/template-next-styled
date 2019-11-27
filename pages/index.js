import React from 'react';
import styled from 'styled-components';

import Head from 'next/head';
import Nav from '../components/Nav';

const Container = styled.div`
  .hero {
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
  }
  .title {
    margin: 0;
    width: 100%;
    padding-top: 80px;
    line-height: 1.15;
    font-size: 48px;
  }
  .title,
  .description {
    text-align: center;
  }
  .row {
    max-width: 880px;
    margin: 80px auto 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .card {
    padding: 18px 18px 24px;
    width: 220px;
    text-align: left;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.greyText};
    border: 1px solid ${({ theme }) => theme.colors.greyBorder};
  }
  .card:hover {
    border-color: ${({ theme }) => theme.colors.blue};
  }
  .card h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 18px;
  }
  .card p {
    margin: 0;
    padding: 12px 0 0;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Home = () => (
  <Container>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Welcome to Next.js!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className="row">
        <a href="https://www.styled-components.com/" className="card">
          <h3>Styled Components &rarr;</h3>
          <p>This template uses SSR styled-components for styling!</p>
        </a>
      </div>

      <div className="row">
        <a href="https://nextjs.org/docs" className="card">
          <h3>Documentation &rarr;</h3>
          <p>Learn more about Next.js in the documentation.</p>
        </a>
        <a href="https://nextjs.org/learn" className="card">
          <h3>Next.js Learn &rarr;</h3>
          <p>Learn about Next.js by following an interactive tutorial!</p>
        </a>
        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          className="card"
        >
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on the Next.js GitHub.</p>
        </a>
      </div>
    </div>
  </Container>
);

export default Home;
