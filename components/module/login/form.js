import React,{useState} from 'react'
import style from './form.module.css'
import Image from "next/image";
import Button from '../../base/Button/button';
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link"
import axios from 'axios'

const Form = () => {
  const getLogin = async () => {
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`);
      const user = result.data;
      console.log(result.data);
     
      const token = result.data.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", user.refreshToken);
    } catch (error) {
      console.log(error);
    }
  };
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formLogin.email);
  const handleLogin = (e) => {
    e.preventDefault();
    getLogin(formLogin);
  };
  return (
    <form onSubmit={handleLogin}>
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
            name="email"
            className="form-control mb-3"
            placeholder="email"
            value={formLogin.email}
            onChange={handleChange}
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
            name="password"
            className="form-control"
            placeholder="Password"
            value={formLogin.password}
            onChange={handleChange}
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
      <Button
        type="sumbit"
        className={`${style.btnsign} w-100 btn`}
        title="Login"
      >
        {" "}
      </Button>
      <div className={`${style.forgot} mb-4 mt-3 float-end`}>
        <label> Forgot password ? </label>
      </div>
      <label className={style.register + " mb-3 text-center"} htmlFor="">
        Don’t have an account?
        <Link href="/register">
          <a className={style.pageregister}>Sign Up</a>
        </Link>
      </label>
    </form>
  );
}

export default Form;