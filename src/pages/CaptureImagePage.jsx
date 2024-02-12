import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import CaptureMobileImage from "../components/captureImage/mobile/CaptureMobileImage";
import { Link } from "react-router-dom";

export default function CaptureImagePage({ setCapturedImg }) {
  const navigate = useNavigate();
  const [img, setImg] = useState();

  // toast options
  const toastOptions = {
    position: "top-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const handleSubmit = () => {
    console.log("captured image submitting");
    if (img) {
      /* setCapturedImg(`data:image/webp;base64,${img}`); */
      setCapturedImg(img);
      navigate("/avatar");
    } else {
      toast.error("Please capture your image", toastOptions);
    }
  };
  return (
    <div>
      <CaptureMobileImage
        img={img}
        setImg={setImg}
        handleSubmit={handleSubmit}
      />
      <ToastContainer />
    </div>
  );
}
