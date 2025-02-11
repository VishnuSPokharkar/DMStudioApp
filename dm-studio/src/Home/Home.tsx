import React from "react";
import styles from "./Home.module.scss";

export interface IHomeProps {
  title: string;
}

const Home: React.FC<IHomeProps> = ({ title }: IHomeProps) => {
  document.title = title;
  return <h1 className={styles.pageHeader}>Home Page</h1>;
};
export default Home;
