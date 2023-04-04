import React from "react";
import Image from "next/image";

import styles from "@/styles/HeaderLinks.module.css";

import behanceIcon from "../public/behance.svg";
import discordIcon from "../public/discord.svg";
import telegramIcon from "../public/telegram.svg";
import vkIcon from "../public/vk.svg";
import Link from "next/link";

const HeaderLinks: React.FC = () => {
  return (
    <div className={styles.links}>
      <Link target="_blank" href="https://www.behance.net/skv1k">
        <Image src={behanceIcon} alt="behance" />
      </Link>
      <Link target="_blank" href="https://t.me/Skv1k0">
        <Image src={telegramIcon} alt="telegram" />
      </Link>
      <Link target="_blank" href="https://vk.com/murderous_wine0_0">
        <Image src={vkIcon} alt="vk" />
      </Link>
      <Link target="_blank" href="https://discord.gg/ykacT4xj">
        <Image src={discordIcon} alt="discord" />
      </Link>
    </div>
  );
};

export default HeaderLinks;
