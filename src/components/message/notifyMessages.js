import { React, ReactDOM } from "react";
import { ToastContainer, toast } from "react-toastify";

export const ReusableToster = (props) => {
  const {
    autoClose = 1000,
    theme = "light",
    icon = "",
    message = "Empty Message !!",
    type = "success",
  } = props;
  const toastFun = () => {
    return toast(message, {
      type: type,
      theme: theme,
      autoClose: autoClose,
    });
  };
  return (
    <div>
      {toastFun()}
      <ToastContainer />
    </div>
  );
};
