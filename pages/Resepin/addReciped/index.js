import React, { useState } from "react";
import Navbars from "../../../components/base/navbar/navbar";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../../../components/module/addRecipe/style.module.css";
import Footer from "../../../components/base/footer/footer";
import Form from "../../../components/base/form";
import axios from "axios"
import style from "../../../styles/addreceiped.module.css";
import Input from "../../../components/base/input/input";
import Router from "next/router";


const AddReciped = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [ingrediens, setIngrediens] = useState("");
  const [video, setVideo] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("ingrediens", ingrediens);
    formData.append("video", video);
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/food/`, formData, {
        "content-type": "multipart/form-data",
      })
      .then((res) => {
        console.log(res);
        Router.push("/profil");
        alert("anda berhasil mengupload resep");
      })
      .catch((error) => {
        alert("isi yang benar yaa");
        console.log(error);
      });
  };
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
  };
  const onVideoUpload = (e) => {
    const file = e.target.files[0];
    setVideo(file);
    console.log(e.target.files[0]);
  };
  return (
    <>
      <Navbars
        classAdd={style.navActive}
        classHome={style.navNon}
        classProfil={style.navNon}
      ></Navbars>
      <Form
        onSubmit={submit}
        contentImage={
          <>
            <input
              type="file"
              name="image"
              id={`${styles.uploadPhoto}`}
              multiple
              onChange={(e) => onImageUpload(e)}
            />
            <label htmlFor={`${styles.uploadPhoto}`}>Add Photo</label>
          </>
        }
        contentTitle={
          <Input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`${styles.title} form-control `}
            id="exampleFormControlInput1"
            placeholder="Title"
          />
        }
        contentIngrediens={
          <textarea
            value={ingrediens}
            onChange={(e) => setIngrediens(e.target.value)}
            name="ingrediens"
            className={`${styles.ingredients} form-control `}
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Ingredients"
          ></textarea>
        }
        contentVideo={
          <Input
            type="file"
            multiple
            onChange={(e) => onVideoUpload(e)}
            className={`${styles.video} form-control `}
            placeholder="Title"
            accept="video/*"
          />
        }
      ></Form>
      <Footer></Footer>
    </>
  );
};

export default AddReciped;