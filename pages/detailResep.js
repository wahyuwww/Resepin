import React from 'react'
import Footer from '../components/base/footer/footer'
import Navbars from '../components/base/navbar/navbar'
import DetailResep from '../components/module/detailResep/detailResep';
import styles from "../styles/addreceiped.module.css";
const detailResep = () => {
  return (
    <div>
      <Navbars
        classAdd={styles.navNon}
        classHome={styles.navActive}
        classProfil={styles.navNon}
          ></Navbars>
          <DetailResep></DetailResep>
      <Footer></Footer>
    </div>
  );
}

export default detailResep