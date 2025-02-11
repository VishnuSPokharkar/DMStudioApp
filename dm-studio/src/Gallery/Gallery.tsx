import React from "react";
import styles from "./Gallery.module.scss";

export interface IGalleryProps {
  title: string;
}

const Gallery: React.FC<IGalleryProps> = ({ title }: IGalleryProps) => {
  document.title = title;
  return <h1 className={styles.pageHeader}>Gallery</h1>;
};
export default Gallery;
