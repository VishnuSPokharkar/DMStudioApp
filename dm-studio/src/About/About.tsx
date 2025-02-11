import React from "react";
import styles from "./About.module.scss";

export interface IAboutProps {
  title: string;
}

const About: React.FC<IAboutProps> = ({ title }: IAboutProps) => {
  document.title = title;
  return <h1 className={styles.pageHeader}>About Us</h1>;
};
export default About;
