import React from 'react'
import Head from "next/head";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Navbars from "../components/base/navbar/navbar";
import Footer from "../components/base/footer/footer";
import styles from "../styles/addreceiped.module.css";
import Home from '../components/module/home/home';
import axios from "axios"
const Homes = () => {
  return (
    <div>
      <Navbars
        classAdd={styles.navNon}
        classHome={styles.navActive}
        classProfil={styles.navNon}
      ></Navbars>
      <Home></Home>
      {/* <h4>data : {resep}</h4>
      <h4>name : {name}</h4> */}
      <Footer></Footer>
    </div>
  );
};
// export async function getServerSideProps(context) {
//   try {
//     const { data: RespData } = await axios.get("http://localhost:5000/food");
//     const result = RespData.data;
//     console.log(result);
//     const name = "wahyu";
//     return {
//       props: {
//         name: name,
//         resep: RespData.data,
//       },
//     };
//   } catch (error) {
//     console.log(error)
//   }
// }




export default Homes