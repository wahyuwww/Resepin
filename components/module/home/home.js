import React from "react";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
  return (
    <div>
      <main className="mt-5">
        <div className="row">
          <div className={`${styles.pageTitle} col-lg-4 `}>
            <h3 className={`${styles.titlePage}`}>
              Discover Recipe & Delicious Food
            </h3>
            <form className={`${styles.search} d-flex mt-3 `} role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="col-lg-6">
            <div className={`${styles.latar}  float-end`}></div>
            <img
              src="/assets/Rectangle 313.png"
              className={`${styles.imagePage} `}
              height="500px"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className={`${styles.popular} col-lg-4 `}>
            <h4 className="mt-3">Popular For You !</h4>
          </div>
        </div>
        <div className="row">
          <div className={`${styles.imageTwo} col-lg-4 `}>
            <img src="/assets/Rectangle 313 (1).png" height="400px" alt="" />
            <div className={`${styles.garisTwo}`}></div>
          </div>
          <div className={`${styles.pageTitle} col-lg-4  `}>
            <h4 className={`${styles.slide}`}>
              Healthy Bone Broth Ramen (Quick & Easy)
            </h4>
            <hr />
            <p className={`${styles.subTitle}`}>
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
              hurry? That’s right!
            </p>
            <button className={`${styles.btnMore} btn `}>Learn More</button>
          </div>
        </div>
        <div className="row">
          <div className={`${styles.popularTwo} col-lg-4 `}>
            <h4 className="mt-3">New Recipe !</h4>
          </div>
        </div>
        <div className="row mt-5">
          <div className={`${styles.bag} col-lg-2 `}></div>
          <div className={`${styles.imageThere} col-lg-4 `}>
            <img src="/assets/Rectangle 313 (2).png" height="400px" alt="" />
          </div>
          <div className={`${styles.pageTitle} col-lg-4 `}>
            <h4 className={`${styles.slide}`}>
              Healthy Bone Broth Ramen (Quick & Easy)
            </h4>
            <hr />
            <p className={`${styles.subTitle}`}>
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
              hurry? That’s right!
            </p>
            <button className={`${styles.btnMore} btn `}>Learn More</button>
          </div>
        </div>
        <div className="row">
          <div className={`${styles.popularTwo} col-lg-4 `}>
            <h4 className="mt-3">Popular Recipe</h4>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row  row-cols-2 row-cols-lg-3 align-items-center g-3 mt-2">
            <div className="col ">
              <div className={`${styles.categories} card text-center d-flex `}>
                <img
                  src="/assets//Rectangle 314.png"
                  alt="Bootstrap"
                  className="img-fluid"
                />
                <div className="card-img-overlay text-white d-flex justify-content-start align-items-end">
                  <p className={`${styles.captionCard}`}>Chiken Kare</p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className={`${styles.categories} card text-center d-flex `}>
                <img
                  src="/assets//Rectangle 315.png"
                  alt="Bootstrap"
                  className="img-fluid"
                />
                <div className="card-img-overlay text-white d-flex justify-content-start align-items-end">
                  <p  className={`${styles.captionCard}`}>Bomb Chicken</p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className={`${styles.categories} card text-center d-flex `}>
                <img
                  src="/assets//Rectangle 316.png"
                  alt="Bootstrap"
                  className="img-fluid"
                />
                <div className="card-img-overlay text-white d-flex justify-content-start align-items-end">
                  <p  className={`${styles.captionCard}`}>Banana Smothie Pop</p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className={`${styles.categories} card text-center d-flex `}>
                <img
                  src="/assets//Rectangle 317.png"
                  alt="Bootstrap"
                  className="img-fluid"
                />
                <div className="card-img-overlay text-white d-flex justify-content-start align-items-end">
                  <p  className={`${styles.captionCard}`}>Banana Smothie Pop</p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className={`${styles.categories} card text-center d-flex `}>
                <img
                  src="/assets//Rectangle 318.png"
                  alt="Bootstrap"
                  className="img-fluid"
                />
                <div className="card-img-overlay text-white d-flex justify-content-start align-items-end">
                  <p  className={`${styles.captionCard}`}>Banana Smothie Pop</p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className={`${styles.categories} card text-center d-flex `}>
                <img
                  src="/assets//Rectangle 319.png"
                  alt="Bootstrap"
                  className="img-fluid"
                />
                <div className="card-img-overlay text-white d-flex justify-content-start align-items-end">
                  <p  className={`${styles.captionCard}`}>Banana Smothie Pop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
