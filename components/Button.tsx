import React from "react";

import styles from "@/styles/Button.module.css";
import Link from "next/link";

interface Props {
  children: any;
  href: any;
}

const Button: React.FC<Props> = ({ children, href }) => {
  return (
    <div className={styles.container}>
      <Link target="_blank" href={href} className={styles.button}>
        {children}
      </Link>
    </div>
  );
};

export default Button;
