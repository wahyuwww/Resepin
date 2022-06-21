import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./style.module.css";
const DetailResep = () => {
  return (
    <>
      <main className="mt-5">
        <div className="container slide">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center mt-5">Loream Sandwich</h1>
              <a href="">
                <img
                  className={`${styles.imageCover} img img-responsive `}
                  src="/assets//Rectangle 313 (3).png"
                />
              </a>
              <div className={`${styles.captionLogo}`}>
                <button className={`${styles.simpan} btn`}>
                  <img src="/assets/simpan.png" width="25px" alt="" />
                </button>
                <button className={`${styles.tangan} btn ms-2`}>
                  <img src="/assets/tangan.png" width="30px" alt="" />
                </button>
              </div>
            </div>
            <div className="col-lg-4  mt-5">
              <h4 className={`${styles.titleIng}`}>Ingredients</h4>
              <ul className={`${styles.ingrediens}`}>
                <li>2 eggs</li>
                <li>
                  2-3 slices of tomato or a lettuce leaf and a slice of ham or
                  cheese
                </li>
                <li>2 tbsp mayonnaise</li>
                <li>a little butter</li>
                <li>crisps , to serve</li>
                <li> slices bread</li>
              </ul>
            </div>
            <div className={`${styles.videoPlay} col-lg-12 `}>
              <h3 className={`${styles.videoStep}`}>Video Step</h3>
              <div className={`${styles.play}`}>
                <button className={`${styles.play} btn btn-warning `}>
                  <img src="/assets/Vector.png" width="10px" alt="" />
                </button>
              </div>
              <div className={`${styles.play}`}>
                <button className={`${styles.play} btn btn-warning `}>
                  <img src="/assets/Vector.png" width="10px" alt="" />
                </button>
              </div>
              <div className={`${styles.play}`}>
                <button className={`${styles.play} btn btn-warning `}>
                  <img src="/assets/Vector.png" width="10px" alt="" />
                </button>
              </div>
              <div className={`${styles.play}`}>
                <button className={`${styles.play} btn btn-warning `}>
                  <img src="/assets/Vector.png" width="10px" alt="" />
                </button>
              </div>
              <div className={`${styles.play}`}>
                <button className={`${styles.play} btn btn-warning `}>
                  <img src="/assets/Vector.png" width="10px" alt="" />
                </button>
              </div>
            </div>
            <div className="col-lg-12  mt-5">
              <div className="form-floating">
                <textarea
                  className={`${styles.coment} form-control`}
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                ></textarea>
                <label htmlFor="floatingTextarea2">Comments</label>
                <button className={`${styles.send} btn btn-warning `}>
                  Send
                </button>
              </div>
            </div>
            <div className="col-lg-1 ">
              <h5 className={`${styles.coments}`}>Comment</h5>
              <img
                className={`${styles.imgComent}`}
                src="/assets//Ellipse 128.png"
                alt=""
              />
            </div>
            <div className={`${styles.comen} col-lg-5 `}>
              <h5>Ayunda</h5>
              <p>Nice recipe. simple and delicious, thankyou</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailResep;
