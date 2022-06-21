import React from 'react'
import style from './form.module.css'
import Image from "next/image";
import Button from '../../base/Button/button';
import "bootstrap/dist/css/bootstrap.css";



const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlInput1"
          className={`${style.title} form-label`}
        >
          Email address
        </label>
        <div className="form-floating">
          <input
            type="email"
            className="form-control mb-3"
            placeholder="email"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlInput1"
          className={`${style.title} form-label`}
        >
          Password
        </label>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
      </div>
      <div
        className={`${style.codisional} form-check mb-4 mt-2 float-start  ms-1`}
      >
        <input
          className="form-check-input"
          type={style.checkbox}
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          I agree to terms & conditions
        </label>
      </div>
      <a href="../Home.html">
        <Button className={`${style.btnsign} w-100 btn`} title="Login">
          {" "}
        </Button>
      </a>
      <div className={`${style.forgot} mb-4 mt-3 float-end`}>
        <label> Forgot password ? </label>
      </div>
      <label className={style.register + " mb-3 text-center"} htmlFor="">
        Don’t have an account?
        <a className={style.pageregister} href="./register.html">
          Sign Up
        </a>
      </label>
    </form>
  );
}

export default Form;