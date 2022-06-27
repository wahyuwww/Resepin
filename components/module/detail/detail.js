/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.css";
import styles from "./style.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Details = () => {
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [create, setCreate] = useState("");
  const router = useRouter();
  const id = router.query.id;

  const getFoodById = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/food/${id}`
      );
      console.log(response.data.data[0].video);
      setVideo(response.data.data[0].video);
      setTitle(response.data.data[0].title);
      setCreate(response.data.data[0].created_at);
    } catch (error) {
      console.log(error);
    }
  };
  // const data = new Date().toISOString().slice(0, 19).replace("T", " ");
  // console.log(data)
  useEffect(() => {
    getFoodById(id);
  }, [id]);
  return (
    <>
      <main className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mt-5 ">
              {video && (
                <video
                  // autoPlay
                  width="700"
                  className={`${styles.videos}`}
                  controls
                >
                  <source src={video} />
                </video>
              )}
              <h3 className={`${styles.titleVideo} mt-3 `}>{title}</h3>
              <p className="text-secondary mt-2">{create}</p>
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
