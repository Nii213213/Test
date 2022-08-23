import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const Home: NextPage = () => {
  const [display, setDisplay] = useState("");

  const pressButton = (number: number) => {
    setDisplay(`${number}${display}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>電卓</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <div className="grid grid-cols-4 gap-3">
            <input
              value={display}
              type="text"
              placeholder="You can't touch this"
              className="col-span-3 input input-bordered w-full max-w-xs"
              disabled
            />
            <button className="btn btn-circle btn-outline">🐰</button>
            <button
              className="btn btn-circle btn-outline"
              onClick={() => pressButton(7)}
            >
              7
            </button>
            <button className="btn btn-circle btn-outline">8</button>
            <button className="btn btn-circle btn-outline">9</button>
            <button className="btn btn-circle btn-outline">÷</button>
            <button className="btn btn-circle btn-outline">4</button>
            <button className="btn btn-circle btn-outline">5</button>
            <button className="btn btn-circle btn-outline">6</button>
            <button className="btn btn-circle btn-outline">×</button>
            <button className="btn btn-circle btn-outline">1</button>
            <button className="btn btn-circle btn-outline">2</button>
            <button className="btn btn-circle btn-outline">3</button>
            <button className="btn btn-circle btn-outline">+</button>
            <button className="btn btn-circle btn-outline">0</button>
            <button className="btn btn-circle btn-outline">.</button>
            <button className="btn btn-circle btn-outline">=</button>
            <button className="btn btn-circle btn-outline">-</button>
          </div>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
