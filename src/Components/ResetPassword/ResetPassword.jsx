import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../Actions/User';
import './ResetPassword.css';

function ResetPassword() {
    const [newPassword, setNewPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();
    const params = useParams();
  
    const {error, loading, message} = useSelector((state) => state.like);
  
    const submitHandler = async(e) => {
      e.preventDefault();
      await dispatch(resetPassword(params.token, newPassword))
      navigate("/");
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
      <div className="resetPassword">
        <form className="resetPasswordForm" onSubmit={submitHandler}>
          <Typography variant="h3" style={{ padding: "2vmax" }}>
            TOGETHER
          </Typography>
  
          <input
            className="resetPasswordInputs"
            type="password"
            placeholder="New Password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
  
          <Button disabled={loading} type="submit">Reset Password</Button>
  
        </form>
      </div>
    );
}

export default ResetPassword