import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./style.module.css";
import axios from "axios";
import Router from "next/router";
import { useRouter } from "next/router";

const EditReceped = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [ingrediens, setIngrediens] = useState("");
  const [video, setVideo] = useState("");
 const router = useRouter();
 const id = router.query.id;
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("ingrediens", ingrediens);
    formData.append("video", video);
    await axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/food/${id}`, formData, {
        "content-type": "multipart/form-data",
      })
      .then((res) => {
        console.log(res);
        Router.push("/profil");
        alert("cie berhasil");
      })
      .catch((error) => {
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
   const getFoodtById = async (id) => {
     try {
       const response = await axios.get(
         `${process.env.NEXT_PUBLIC_API_URL}/food/${id}`
       );
       console.log(response.data.data);
       setTitle(response.data.data[0].title);
       setIngrediens(response.data.data[0].ingrediens);
     } catch (error) {
       console.log(error);
     }
   };
   useEffect(() => {
     getFoodtById(id);
   }, []);
    
    
  return (
    <>
      <main className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={submit}>
                <div className={`${styles.bgUpload} card `}>
                  <div className="card-body">
                    <div className={`${styles.add}  text-center`}>
                      <p className="mt-5">image</p>
                      <img src="../assets/image.png" alt="" />
                      <input
                        type="file"
                        name="image"
                        id={`${styles.uploadPhoto}`}
                        multiple
                        onChange={(e) => onImageUpload(e)}
                      />
                      <label htmlFor={`${styles.uploadPhoto}`}>Add Photo</label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={`${styles.title} form-control `}
                    id="exampleFormControlInput1"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={ingrediens}
                    onChange={(e) => setIngrediens(e.target.value)}
                    name="ingrediens"
                    className={`${styles.ingredients} form-control `}
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Ingredients"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    type="file"
                    multiple
                    onChange={(e) => onVideoUpload(e)}
                    className={`${styles.video} form-control `}
                    placeholder="Title"
                    accept="video/*"
                  />
                </div>
                <button className={`${styles.btnAdd} btn`} type="submit">
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EditReceped;
