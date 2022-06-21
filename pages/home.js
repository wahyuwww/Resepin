import React from 'react'
import Head from "next/head";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Navbars from "../components/base/navbar/navbar";
import Footer from "../components/base/footer/footer";
import styles from "../styles/addreceiped.module.css";
import Home from '../components/module/home/home';
const Homes = () => {
  return (
    <div>
      <Navbars
        classAdd={styles.navNon}
        classHome={styles.navActive}
        classProfil={styles.navNon}
          ></Navbars>
          <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default Homes