/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Footer from "../../base/footer/footer";
import Navbars from "../../base/navbar/navbar";
import Profils from "../profil/profil";
import styles from "../../styles/addreceiped.module.css";
import axios from "axios";
import style from "../../module/profil/style.module.css";
import { useRouter } from "next/router";
import Card from "../profil/card";
import Input from "../../base/input/input";
import Login from "../../base/Login";
import Logout from "../../base/Logout";
import Image from "next/image";
import Link from "next/link";
import { Button, Modal, Form, Container, Col, Row } from "react-bootstrap";
import {
  BsFillPencilFill,
  BsTrashFill,
  BsFillCloudUploadFill,
} from "react-icons/bs";
import Swal from "sweetalert2";

const About = () => {
  

  return (
    <>
      <Navbars
        classAdd={styles.navNon}
        classHome={styles.navNon}
        classProfil={styles.navActive}
      >
        {isAuth && <Logout></Logout>}
        {!isAuth && <Login></Login>}
      </Navbars>
      <div>
        <main className="mt-5">
          <div className="container slide">
            <div className="row">
              <div className="col-lg-12">
                <div className={`${style.profil}`}>
                  <img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Kurt&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale"
                    alt=""
                    style={{ borderRadius: "50%" }}
                    className={`${style.profilImage} rounded`}
                  />
                  <p className={`${style.textProfil} text-center mt-3`}>
                    Wahyu Dwi Purwanto (Developer)
                  </p>
                  <p className={`${style.textProfil} text-center `}></p>
                  <form
                    action=""
                    onSubmit={submit}
                    className={style.formupload}
                  >
                    <div className={`${style.formbtn} text-center mt-2 mb-5`}>
                      <Button variant="warning" onClick={handleShow}>
                        Edit Profil
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
