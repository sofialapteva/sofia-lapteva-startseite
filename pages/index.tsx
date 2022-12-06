import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { sofia, igor, grisa, vitya, irina, vera, nick } from "../public/img";
import React from "react";
import Confetti from "react-confetti";
export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Sofia Lapteva Startseite</title>
        <meta name="description" content="Sofia Lapteva Startseite" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Confetti
        width={typeof screen !== "undefined" ? screen.width : 1536}
        height={typeof screen !== "undefined" ? screen.height : 1300}
      />

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <em></em>
      </footer>
    </div>
  );
}
