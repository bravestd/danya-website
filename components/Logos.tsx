import React from "react";

import styles from "@/styles/Logos.module.scss";
import Image from "next/image";

import logoOne from "../public/logos_1.png";
import logoSecond from "../public/logos_2.png";
import logoThird from "../public/logos_3.png";

const Button: React.FC = () => {
  return (
    <div className={styles.container}>
      <span>Logos</span>
      <div className={styles.items}>
        <div className={styles.item}>
          <span>(By skv1k)</span>
          <Image src={logoOne} alt="image" />
          <p>Love Bot</p>
        </div>
        <div className={styles.item}>
          <span>(By skv1k)</span>
          <Image src={logoSecond} alt="image" />
          <p>Premium</p>
        </div>
        <div className={styles.item}>
          <span>(By skv1k)</span>
          <Image src={logoThird} alt="image" />
          <p>Ton Bot</p>
        </div>
      </div>
    </div>
  );
};

export default Button;
