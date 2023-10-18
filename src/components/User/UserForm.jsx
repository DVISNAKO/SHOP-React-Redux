import React from "react";
import UserSignupForm from "./UserSignupForm";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/User.module.css";
import { toggleForm } from "../../features/user/userSlice";

const UserForm = () => {
 const dispatch = useDispatch();

  const { showForm } = useSelector(({ user }) => user);
  return showForm ? (
    <>
      <div className={styles.overlay} 
      onClick={() => dispatch(toggleForm(false))}/>
      <UserSignupForm />
    </>
  ) : (
    <></>
  );
};

export default UserForm;
