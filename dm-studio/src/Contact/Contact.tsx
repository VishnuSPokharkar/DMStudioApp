import React from "react";
import styles from "./Contact.module.scss";

export interface IContactProps {
  title: string;
}

const Contact: React.FC<IContactProps> = ({ title }: IContactProps) => {
  document.title = title;
  return <h1 className={styles.pageHeader}>Contact Us </h1>;
};
export default Contact;
