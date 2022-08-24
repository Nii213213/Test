import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const Home: NextPage = () => {
  const [display, setDisplay] = useState("");
  const [lastOperator, setLastOperator] = useState<string | null>(null);
  const [isLastInputOperator, setIsLastInputOperator] = useState<
    boolean | null
  >(null);
  const [numberMainBox, setNumberMainBox] = useState<number | null>(null);

  const pressNumber = (number: number) => {
    if (isLastInputOperator) {
      setNumberMainBox(Number(`${display}`));
      setDisplay(`${number}`);
    } else {
      setDisplay(`${display}${number}`);
    }
  };

  const pressOperator = (operator: string) => {
    if (lastOperator === "÷" && numberMainBox) {
      // XXX: setNumberMainBoxの直後、numberMainBoxが更新されてるとは限らない
      const calcResult = numberMainBox / Number(`${display}`);
      setNumberMainBox(calcResult);
      setDisplay(`${calcResult}`);
    }
    setIsLastInputOperator(true);
    setLastOperator(operator);
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
              onClick={() => pressNumber(7)}
            >
              7
            </button>
            <button
              className="btn btn-circle btn-outline"
              onClick={() => pressNumber(8)}
            >
              8
            </button>
            <button
              className="btn btn-circle btn-outline"
              onClick={() => pressNumber(9)}
            >
              9
            </button>
            <button
              className="btn btn-circle btn-outline"
              onClick={() => pressOperator("÷")}
            >
              ÷
            </button>
            <button
              className="btn btn-circle btn-outline"
              onClick={() => pressNumber(4)}
            >
              4
            </button>
            <button
              className="btn btn-circle btn-outline"
              onClick={() => pressNumber(5)}
            >
              5
            </button>
            <button
              className="btn btn-circle btn-outline"
              onClick={() => pressNumber(6)}
            >
              6
            </button>
            <button className="btn btn-circle btn-outline">×</button>
            <button
              className="btn btn-circle btn-outline"
              onClick={() => pressNumber(1)}
            >
              1
            </button>
            <button
              className="btn btn-circle btn-outline"
              onClick={() => pressNumber(2)}
            >
              2
            </button>
            <button
              className="btn btn-circle btn-outline"
              onClick={() => pressNumber(3)}
            >
              3
            </button>
            <button className="btn btn-circle btn-outline">+</button>
            <button
              className="btn btn-circle btn-outline"
              onClick={() => pressNumber(0)}
            >
              0
            </button>
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
