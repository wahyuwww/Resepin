import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import styles from "./style.module.css"
const AddRecipe = () => {
  return (
    <>
      <main className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form action="">
                <div className={`${styles.bgUpload} card `}>
                  <div className="card-body">
                    <div className={`${styles.add}  text-center`}>
                      <p className="mt-5">image</p>
                      <img src="../assets/image.png" alt="" />
                      <input
                        type="file"
                        name="photo"
                        id={`${styles.uploadPhoto}`}
                      />
                      <label htmlFor={`${styles.uploadPhoto}`}>Add Photo</label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className={`${styles.title} form-control `}
                    id="exampleFormControlInput1"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className={`${styles.ingredients} form-control `}
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Ingredients"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    type="file"
                    className={`${styles.video} form-control `}
                    id="exampleFormControlInput1"
                    placeholder="Title"
                  />
                </div>
              </form>
              <button className={`${styles.btnAdd} btn`}>Post</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddRecipe;