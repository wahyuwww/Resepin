import React from "react";
import Footer from "../../components/base/footer/footer";
import Navbars from "../../components/base/navbar/navbar";
import Details from "../../components/module/detail/detail";
import styles from "./addreceiped.module.css";
const Detail = () => {
  return (
    <>
      <Navbars
        classAdd={styles.navNon}
        classHome={styles.navActive}
        classProfil={styles.navNon}
      ></Navbars>
      <Details></Details>
      <Footer></Footer>
    </>
  );
};

export default Detail;
