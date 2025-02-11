import React from "react";
import styles from "./Testimonials.module.scss";

export interface ITestimonialsProps {
  title: string;
}

const Testimonials: React.FC<ITestimonialsProps> = ({
  title,
}: ITestimonialsProps) => {
  document.title = title;
  return <h1 className={styles.pageHeader}>Testimonials</h1>;
};
export default Testimonials;
