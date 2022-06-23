/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/router";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
const Home = () => {
  const [resep, setResep] = useState([]);
  const [counter, setCounter] = useState(1);
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const [paginate, setPagination] = useState({
    currentPage: 1,
    limit: 6,
    sort: "",
    search: "",
  });
  const [sort, setSort] = useState("ASC");
  const [search, setSearch] = useState("");
  console.log(paginate);
  async function fetchData(counter, sort, search) {
    try {
      const result = await axios({
        method: "GET",
        baseURL: "http://localhost:5000/",
        url: `/food/filter/?page=${counter}&type=${sort}&search=${search}`,
      });
      // console.log(result.data.pagination);
      setPagination(result.data.pagination);
      setResep(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData(counter, sort, search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, sort, search]);

  const next = () => {
    setCounter(
      counter === paginate.totalPage ? paginate.totalPage : counter + 1
    );
    console.log(counter);
  };
  const previos = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };
  const sortby = () => {
    setSort("DESC");
  };
  const sortAsc = () => {
    setSort("ASC");
  };
  const env = process.env.NEXT_PUBLIC_API_URL;
  console.log(env);

  return (
    <div>
      <main className="mt-5">
        <div className="row">
          <div className={`${styles.pageTitle} col-lg-4 `}>
            {user.name && <h5>Selamat Datang {user.name}</h5>}
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
          <input
            type="search"
            className="form-control search-input"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 mt-5">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Sorting Name
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <button className="btn btn-info me-3" onClick={sortAsc}>
                    Judul Resep A-Z
                  </button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button className="btn btn-success" onClick={sortby}>
                    Judul Resep Z-A
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="row  row-cols-2 row-cols-lg-3 align-items-center g-3 mt-2">
            {resep.map((reseps) => (
              <div className="col " key={reseps.idfood}>
                <div
                  className={`${styles.categories} card text-center d-flex `}
                >
                  <Image
                    width="350px"
                    height="355px"
                    layout="responsive"
                    src={reseps.image}
                    alt="Bootstrap"
                    className="img-fluid"
                  />
                  <div className="card-img-overlay text-white d-flex justify-content-start align-items-end">
                    <Link href={`/detailResep/${reseps.idfood}`}>
                      <a className={`${styles.captionCard}`}>{reseps.title}</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`${styles.pagination} row row-cols-4 row-cols-lg-12 align-items-center g-1 mt-5`}
          >
            <button
              className="btn btn-primary"
              style={{ width: 40, height: 40 }}
              onClick={previos}
            >
              <BsFillArrowLeftSquareFill />
            </button>
            <p className={`${styles.curent}`}>
              {paginate.currentPage}/{paginate.totalPage}
            </p>
            <button
              className={`${styles.next} btn btn-primary`}
              style={{ width: 40, height: 40 }}
              onClick={next}
            >
              <BsFillArrowRightSquareFill />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
