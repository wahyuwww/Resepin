import axios from "axios";
// import { ActionTypes } from "../constants/action-types";
import Router from "next/router";

export const loginUser = (dataForm) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(
      `http://localhost:5000/auth/login`,
      dataForm,
      { withCredentials: true }
    );
    // const user = result.data.data
    const user = {
      name: result.data.data.fullname,
      id: result.data.data.iduser,
      email: result.data.data.email,
      status: result.data.data.active,
      token: result.data.data.token,
      refreshToken: result.data.data.refreshToken,
    };
    // console.log(user.status == 0)
    if (user.status == 0) {
      alert("maaf anda belum activasi");
      Router.push("/login");
    }
    // console.log(result.data.data.token);
    if (user.status == 1) {
      const token = result.data.data.token;
      localStorage.setItem("Resep", JSON.stringify(user));
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });

      dispatch({
        type: "USER_LOGIN_SUCCESS",
        token: token.data,
        payload: user,
      });
      Router.push("/home");
      alert("berhasil login");
    }

    // const token = result.data.data.token;
    // localStorage.setItem("Resep", JSON.stringify(user));
    // dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });

    // dispatch({
    //   type: "USER_LOGIN_SUCCESS",
    //   token: token.data,
    //   payload: user,
    // });
    // Router.push("/home");
    // alert("berhasil login");
  } catch (error) {
    Router.push("/login");
    alert("anda gagal login");
    console.log(error);
  }
};

export const signUp = (dataForm) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      dataForm
    );
    const user = result.data.data;

    localStorage.setItem("token", user.token);
    localStorage.setItem("refreshToken", user.refreshToken);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    Router.push("/login");
    alert("berhasil daftar silahkan login");
  } catch (error) {
    Router.push("/login");
    alert("anda gagal daftar");
    console.log(error);
  }
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_PRODUCT",
    });

    dispatch({
      type: "SIGN_OUT",
    });
  };
};

