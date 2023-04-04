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
      <Link target="_blank" href="https://www.bravestd.com/">
        <Image src={behanceIcon} alt="behance" />
      </Link>
      <Link target="_blank" href="https://www.bravestd.com/">
        <Image src={telegramIcon} alt="telegram" />
      </Link>
      <Link target="_blank" href="https://www.bravestd.com/">
        <Image src={vkIcon} alt="vk" />
      </Link>
      <Link target="_blank" href="https://www.bravestd.com/">
        <Image src={discordIcon} alt="discord" />
      </Link>
    </div>
  );
};

export default HeaderLinks;
