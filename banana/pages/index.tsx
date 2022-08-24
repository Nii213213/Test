import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const Home: NextPage = () => {
  const [display, setDisplay] = useState("");

  let judge: boolean | undefined;
  let judge2: boolean | false;
  let numberMainBox: number | undefined;
  let numberSubBox: number | undefined;
  let stringOperatorBox: string | undefined;

  const pressNumber = (number: number) => {
    setDisplay(`${display}${number}`);
    if (judge === true) {
      setDisplay(`${number}`);
    }
    judge = false;
  };
  const pressOperator = (operator: string) => {
    if(judge2 === true && stringOperatorBox === "÷"){
      numberMainBox=numberMainBox/numberSubBox;
      setDisplay(`${numberMainBox}`);
      numberSubBox = undefined
    }
    stringOperatorBox = operator;
    judge2 = true;
    if(judge === true){
      numberMainBox = Number(display);
    } 
    
      setDisplay(`${numberMainBox}`);
    };
    judge = true;
  }
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
