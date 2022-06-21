import React from 'react'
import Navbars from '../components/base/navbar/navbar';
import "bootstrap/dist/css/bootstrap.css";
import styles from '../styles/addreceiped.module.css'
import Footer from '../components/base/footer/footer';
import AddRecipe from "../components/module/addRecipe/addRecipe";


const addReciped = () => {
  return (
    <>
      <Navbars
        classAdd={styles.navActive}
        classHome={styles.navNon}
        classProfil={styles.navNon}
      ></Navbars>
      <AddRecipe></AddRecipe>
      <Footer></Footer>
    </>
  );
  
};

export default addReciped;