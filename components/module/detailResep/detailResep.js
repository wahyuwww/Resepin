/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import Link from "next/link"


const DetailResep = () => {
  const [title, setTitle] = useState("");
  const [idfood, setFood] = useState("");
  const [ingrediens, setIngrediens] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const router = useRouter();
  const id = router.query.id;
  
  const getFoodById = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/food/${id}`
      );
      console.log(response.data);
      setImagePreview(response.data.data[0].image);
      setTitle(response.data.data[0].title);
      setFood(response.data.data[0].idfood);
      setIngrediens(
        response.data.data[0].ingrediens
      );
    } catch (error) {
      console.log(error);
    }
  };
  console.log(id);
  useEffect(() => {
    getFoodById(id);
  }, [id]);
  return (
    <>
      <main className="mt-5">
        <div className="container slide">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center mt-5">{title}</h1>
              {imagePreview && (
                <Image
                  src={imagePreview}
                  width={360}
                  height={200}
                  layout="responsive"
                  alt="Picture of the resep"
                  className={`${styles.imageCover} img img-responsive`}
                />
              )}
              <div className={`${styles.captionLogo}`}>
                <button className={`${styles.simpan} btn`}>
                  <img src="/assets/simpan.png" width="25px" alt="" className={styles.icon}/>
                </button>
                <button className={`${styles.tangan} btn ms-2`}>
                  <img src="/assets/tangan.png" width="30px" alt="" className={styles.icon}/>
                </button>
              </div>
            </div>
            <div className="col-lg-4  mt-5">
              <h4 className={`${styles.titleIng}`}>Ingredients</h4>
              <ul className={`${styles.ingrediens}`}>
                {ingrediens?.split(",") ? (
                  <>
                    {ingrediens && <li>{ingrediens.split(",")[0]}</li>}
                    {ingrediens && <li>{ingrediens.split(",")[1]}</li>}
                    {ingrediens && <li>{ingrediens.split(",")[2]}</li>}
                    {ingrediens && <li>{ingrediens.split(",")[3]}</li>}
                  </>
                ) : (
                  <li>tidak ada ingrediens</li>
                )}
              </ul>
            </div>
            <div className={`${styles.videoPlay} col-lg-12 `}>
              <h3 className={`${styles.videoStep}`}>Video Step</h3>
              <div className={`${styles.play}`}>
                <Link href={`/detail/${idfood}`}>
                  <button className={`${styles.play} btn btn-warning `}>
                    <img src="/assets/Vector.png" width="10px" alt="" />
                  </button>
                </Link>
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
export async function getStaticPaths(context) {
  // const id = context.params.id
  const { data: RespData } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/food`
  );
  console.log(ResData)
  const paths = RespData.data.map((item) => {
    return {
      params: {
        id: item.id + "",
      },
    };
  });
  console.log(paths);
  return {
    paths: paths,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps() {
  const id = context.params.id;
  const { data: RespData } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/food/${id}`
  );
  // setTimeout(()=>{
  return {
    props: {
      resep: RespData.data,
    },
  };
  // }, 2000)
}
export default DetailResep;
