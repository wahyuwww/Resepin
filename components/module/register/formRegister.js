import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import style from "./register.module.css"
const FormRegister = () => {
  return (
    <>
      <form className={`${style.formregister}`}>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className={`${style.titleRegis} form-label `}
          >
            {" "}
            Name{" "}
          </label>{" "}
          <input type="text" className="form-control mb-3" placeholder="name" />
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className={`${style.titleRegis} form-label `}
            >
              {" "}
              Email address *{" "}
            </label>{" "}
            <input
              type="email"
              className="form-control mb-3"
              placeholder="email"
            />
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className={`${style.titleRegis} form-label `}
              >
                {" "}
                Phone Number{" "}
              </label>{" "}
              <input
                type="number"
                className="form-control mb-3"
                placeholder="08xxxxxxxxxx"
              />
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className={`${style.titleRegis} form-label `}
                >
                  {" "}
                  Create New Password{" "}
                </label>{" "}
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Create New Password"
                />
              </div>{" "}
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className={`${style.titleRegis} form-label `}
                >
                  {" "}
                  Password{" "}
                </label>{" "}
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>{" "}
              <div
                className={`${style.codisionalRegis} form-check mb-4 mt-2 float-start  ms-1`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I agree to terms & conditions{" "}
                </label>{" "}
              </div>{" "}
              <a href="../Home.html">
                <button
                  className={`${style.btnSignup} w-100 btn `}
                  type="button"
                >
                  {" "}
                  Register Account{" "}
                </button>{" "}
              </a>{" "}
              <label className={`${style.loginPage}   text-center"`} htmlFor="">
                {" "}
                Already have account ?
                <a
                  className={`${style.pageRegister}`}
                  href="./register.html"
                >
                  {" "}
                  Log in Here{" "}
                </a>{" "}
              </label>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </form>{" "}
    </>
  );
};

export default FormRegister;
