/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../../module/addRecipe/style.module.css";
import Button from "../../../components/base/Button/button";

const Form = ({contentImage,contentIngrediens,contentTitle,contentVideo,onSubmit}) => {

  return (
    <>
      <main className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={onSubmit}>
                <div className={`${styles.bgUpload} card `}>
                  <div className="card-body">
                    <div className={`${styles.add}  text-center`}>
                      <p className="mt-5">image</p>
                      <img src="../assets/image.png" alt="" />
                      {contentImage}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                 {contentTitle}
                </div>
                <div className="mb-3">
                 {contentIngrediens}
                </div>
                <div className="mb-3">
                 {contentVideo}
                </div>
                <Button
                  className={`${styles.btnAdd} btn`}
                  type="submit"
                  title="Post"
                ></Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Form;
