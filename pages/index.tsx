import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Logos from "@/components/Logos";
import HeaderLinks from "@/components/HeaderLinks";

export default function Home() {
  return (
    <>
      <Head>
        <title>Danya дизайнер</title>
        <meta name="description" content="Качественный дизайн от danya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeaderLinks />
        <div className={styles.header}>
          <span>(By skv1k)</span>
          <h1>Портфолио</h1>
          <p>Дизайн - это эстетичность и красота</p>
        </div>
        <div className={styles.projects}>
          <h2>Проекты</h2>
          <Logos />
        </div>
      </main>
    </>
  );
}
