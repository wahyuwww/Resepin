import React from 'react'
import Footer from '../components/base/footer/footer';
import Navbars from '../components/base/navbar/navbar';
import Profils from '../components/module/profil/profil';
import styles from "../styles/addreceiped.module.css";
import axios from "axios"
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
export async function getServerSideProps(context) {
  try {
    const { data: RespData } = await axios.get("http://localhost:5000/food");
    const result = RespData.data;
    console.log(result.name);
    const name = "wahyu";
    return {
      props: {
        name: name,
        resep: RespData.data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
export default Profil;