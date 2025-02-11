import React from "react";
import styles from "./MyProducts.module.scss";

export interface IMyProductsProps {
  title: string;
}

const MyProducts: React.FC<IMyProductsProps> = ({
  title,
}: IMyProductsProps) => {
  document.title = title;
  return <h1 className={styles.pageHeader}>My Products</h1>;
};
export default MyProducts;
