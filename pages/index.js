import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Techer Section</title>
        <meta name="description" content="Teacher section" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
