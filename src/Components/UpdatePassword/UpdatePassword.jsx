import React from "react";
import "./UpdatePassword.css";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../Actions/User";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const {error, loading, message} = useSelector((state) => state.like);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
        updatePassword({
        oldPassword,
        newPassword
        })
    );
    navigate("/account");
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({type: "clearErrors"});
    }
    if (message) {
      alert.success(message);
        dispatch({type: "clearMessage"});
    }
  }, [dispatch, error, message, alert]);
  

  return (
    <div className="updatePassword">
      <form className="updatePasswordForm" onSubmit={submitHandler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          TOGETHER
        </Typography>

        <input
          className="updatePasswordInputs"
          type="password"
          placeholder="Old Password"
          required
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <input
          className="updatePasswordInputs"
          type="password"
          placeholder="New Password"
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button disabled={loading} type="submit">Change Password</Button>

      </form>
    </div>
  );
}

export default UpdatePassword;
