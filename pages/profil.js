import React from 'react'
import Footer from '../components/base/footer/footer';
import Navbars from '../components/base/navbar/navbar';
import Profils from '../components/module/profil/profil';
import styles from "../styles/addreceiped.module.css";
const Profil = () => {
  return (
    <>
      <Navbars
        classAdd={styles.navNon}
        classHome={styles.navNon}
        classProfil={styles.navActive}
      ></Navbars>
      <Profils></Profils>
      <Footer></Footer>
    </>
  );
}

export default Profil;