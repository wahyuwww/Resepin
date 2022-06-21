import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./style.module.css";
const Details = () => {
  return (
    <>
      <main className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mt-5 ">
              <video width="700" className={`${styles.videos}`} controls>
                <source
                  src="/assets/WhatsApp Video 2019-04-13 at 7.10.45 PM.3gpp"
                  type="video/mp4"
                />
              </video>
              <h3 className={`${styles.titleVideo} mt-3 `}>
                Beef Steak with Curry Sauce - [Step 4] Cut the condiment and
                then mix it
              </h3>
              <p className="text-secondary mt-2">3 month</p>
            </div>
            <div className={`${styles.sugestion} col-lg-3 mb-5 `}>
              <h3 className={`${styles.next}`}>Next </h3>
              <div className={`${styles.imageStep} mt-3`}>
                <img src="/assets/Rectangle 90.png" alt="" />
                <h4 className={`${styles.step}  text-white`}>[Step 5]</h4>
                <p className={`${styles.caption} `}>
                  Beef Steak with Curry Sauce - [Step 5] Saute condiments
                  together until turn brown
                </p>
                <p className={`${styles.subCaption}  text-secondary`}>
                  HanaLohana - 3 month ago
                </p>
              </div>
              <div className={`${styles.imageStep} mt-5`}>
                <img src="/assets/Rectangle 330.png" alt="" />
                <h4 className={`${styles.step}`}>[Step 5]</h4>
                <p className={`${styles.caption} `}>
                  Beef Steak with Curry Sauce - [Step 5] Saute condiments
                  together until turn brown
                </p>
                <p className={`${styles.subCaption}  text-secondary`}>
                  HanaLohana - 3 month ago
                </p>
              </div>
              <div className={`${styles.imageStep} mt-5`}>
                <img src="/assets/Rectangle 91.png" alt="" />
                <h4 className={`${styles.step}  text-white`}>[Step 5]</h4>
                <p className={`${styles.caption} `}>
                  Beef Steak with Curry Sauce - [Step 5] Saute condiments
                  together until turn brown
                </p>
                <p className={`${styles.subCaption}  text-secondary`}>
                  HanaLohana - 3 month ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Details;
