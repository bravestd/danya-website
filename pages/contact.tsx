import Head from "next/head";
import styles from "@/styles/Contact.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";

import behanceIcon from "../public/behance.svg";
import discordIcon from "../public/discord.svg";
import telegramIcon from "../public/telegram.svg";
import vkIcon from "../public/vk.svg";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Контакты</h1>
        </div>
        <div className={styles.links}>
          <Link href="https://www.bravestd.com/" className={styles.link}>
            <Image src={behanceIcon} alt="behance" />
            <span>Behance</span>
          </Link>
          <Link href="https://www.bravestd.com/" className={styles.link}>
            <Image src={telegramIcon} alt="telegram" />
            <span>Telegram</span>
          </Link>
          <Link href="https://www.bravestd.com/" className={styles.link}>
            <Image src={discordIcon} alt="discord" />
            <span>Discord</span>
          </Link>
          <Link href="https://www.bravestd.com/" className={styles.link}>
            <Image src={vkIcon} alt="vkontakte" />
            <span>VKontakte</span>
          </Link>
        </div>
        <Button href="https://t.me/Skv1k0">Заказать дизайн</Button>
      </main>
    </>
  );
}
