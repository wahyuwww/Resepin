import React from "react";
import style from "./style.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from 'next/image'
const Profils = () => {
  return (
    <div>
      <main className="mt-5">
        <div className="container slide">
          <div className="row">
            <div className="col-lg-12">
              <div className={`${style.profil}`}>
                <img
                  src="/assets/Ellipse 127.png"
                  alt=""
                  className={`${style.profilImage}`}
                />
                <p className={`${style.textProfil} text-center `}>
                  Garneta Sharina
                </p>
              </div>
            </div>
            <hr />
            <div className="col-lg-12 mt-3">
              <ul className="list-group list-group-horizontal">
                <li className={`${style.choase} list-group-item`}>
                  <a href="">My Recipe</a>
                </li>
                <li className={`${style.choase} list-group-item`}>
                  <a href="" className="text-secondary">
                    Saved Recipe
                  </a>
                </li>
                <li className={`${style.choase} list-group-item`}>
                  <a href="" className="text-secondary">
                    Liked Recipe
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-12 mt-5">
              <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5 g-1">
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      src="/assets//Rectangle 328.png"
                      className="image-fluid"
                      alt="..."
                    />
                    <h4 className={`${style.captionImage}`}>Bomb Chicken</h4>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm ms-2">
                    <img
                      src="/assets//Rectangle 327.png"
                      className="image-fluid"
                      alt="..."
                    />
                    <h4 className={`${style.captionImage}`}>Bananas Pancake</h4>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm ms-2">
                    <img
                      src="/assets//Rectangle 328.png"
                      className="image-fluid"
                      alt="..."
                    />
                    <h4 className={`${style.captionImage}`}>Bomb Chicken</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profils;
