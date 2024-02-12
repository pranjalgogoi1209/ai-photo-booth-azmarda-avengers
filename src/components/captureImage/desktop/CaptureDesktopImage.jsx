import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import logo from "./../assets/logo.png";
import frame from "./../assets/bigscreen-capture-image-frame.png";

export default function CaptureImagePage({ setCapturedImg }) {
  const navigate = useNavigate();
  const webRef = useRef();
  const [img, setImg] = useState();

  const handleCapture = e => {
    if (e.target.innerText === "Capture") {
      setImg(webRef.current.getScreenshot());
      e.target.innerText = "Retake";
    } else {
      img && setImg("");
      e.target.innerText = "Capture";
    }
  };

  // toast options
  const toastOptions = {
    position: "bottom-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  return (
    <CaptureImageWrapper>
      <div className="captureImage">
        <div className="webcamContainer">
          <div className="webcamParent">
            <Webcam
              ref={webRef}
              id="webcam"
              forceScreenshotSourceSize={true}
              // screenshotFormat="image/png"
            />
            {img && (
              <img src={img} alt="captured image" className="capturedImage" />
            )}
          </div>
          <img src={frame} alt="frame" className="frame" />
        </div>
        <div className="capture">
          <button onClick={e => handleCapture(e)} className="captureRetake">
            Capture
          </button>
          <button onClick={handleSubmit} className="submit">
            Submit
          </button>
        </div>
      </div>
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ToastContainer />
    </CaptureImageWrapper>
  );
}

const CaptureImageWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;

  /* captureImage starts here */
  .captureImage {
    /* border: 1px solid black; */
    height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    padding-left: 10vw;
    .webcamContainer {
      position: relative;
      height: 26.25vw;
      width: 35vw;
      background-color: #f1f1f1;
      /* box-shadow: 1vw, 1vw, 1vw rgba(0, 0, 0, 0.5); */
      /* border: 5px solid black; */
      .webcamParent {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
        #webcam {
          width: 100%;
          height: 100%;
          /* object-fit: cover; */
        }
        .capturedImage {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          /* transform: scale(1.65, 1); */
        }
      }
      .frame {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .capture {
      /* border: 1px solid black; */
      display: flex;
      gap: 2vw;
      button {
        /* border: 0.13vw solid black; */
        text-align: center;
        width: 16vw;
        border: none;
        background-color: transparent;
        outline: none;
        padding: 0.2vw 2vw;
        font-weight: 600;
        font-size: 2.5vw;
        border-radius: 0.6vw;
        cursor: pointer;
        transform: translateY(-0.1vw);
        transition: all ease 0.5s;
        box-shadow: 0.1vw 0.1vw 0.4vw rgba(0, 0, 0, 0.5);
        &:hover {
          box-shadow: none;
          transform: translateY(0);
        }
      }
      .captureRetake {
        background-color: #fcb017;
      }
      .submit {
        border: 0.1vw solid black;
        background-color: transparent;
      }
    }
  }
  /* captureImage ends here */

  .logo {
    /* border: 1px solid red; */
    width: 10vw;
    height: 10vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
