import React from "react";
import Footer from "../../components/base/footer/footer";
import Navbars from "../../components/base/navbar/navbar";
import Edit from "../../components/module/addRecipe/edit";
import styles from "./addreceiped.module.css";


const addReciped = () => {
  return (
    <>
      <Navbars
        classAdd={styles.navActive}
        classHome={styles.navNon}
        classProfil={styles.navNon}
      ></Navbars>
      <Edit></Edit>
      <Footer></Footer>
    </>
  );
};

export default addReciped;
