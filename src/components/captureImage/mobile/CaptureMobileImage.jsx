import React, { useState, useRef } from "react";
import styled from "styled-components";
import Webcam from "react-webcam";
import logo from "./../../../assets/logo.png";
import frame from "./../../../assets/capture-image-page/desktop-webcam-frame.png";
import { Link } from "react-router-dom";

export default function CaptureMobileImage({ handleSubmit, setImg, img }) {
  const webRef = useRef();
  img && console.log(img);

  const handleCapture = e => {
    if (e.target.innerText === "Capture") {
      setImg(webRef.current.getScreenshot());
      e.target.innerText = "Retake";
    } else {
      img && setImg("");
      e.target.innerText = "Capture";
    }
  };

  return (
    <CaptureMobileImageWrapper>
      <header>
        <Link to={"/"} className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <h1>Capture Your Face</h1>
      </header>

      <main>
        <div className="captureImage">
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
        </div>
      </main>
      <footer>
        <button onClick={e => handleCapture(e)} className="captureRetake">
          Capture
        </button>
        <button onClick={handleSubmit} className="submit">
          Submit
        </button>
      </footer>
    </CaptureMobileImageWrapper>
  );
}

const CaptureMobileImageWrapper = styled.div`
  /* border: 1px solid black; */
  height: 100vh;
  padding: 4vw;
  display: flex;
  flex-direction: column;
  gap: 7vw;
  /* justify-content: space-between; */
  header {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    gap: 3vw;
    .logo {
      margin: 0 auto;
      width: 20vw;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h1 {
      /* border: 1px solid black; */
      font-size: 6.5vw;
      text-align: center;
      font-weight: 600;
    }
  }

  main {
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    margin-bottom: 0vw;
    .captureImage {
      background-color: #c72041;
      width: 90%;
      /* height: 70vw; */
      border: 2vw solid #c72041;
      border-bottom: 1.2vw solid #c72041;
      border-radius: 3vw;
      .webcamParent {
        position: relative;
        /* height: 100%; */
        width: 100%;
        overflow: hidden;
        #webcam {
          border-radius: 1vw;
          margin: 0 auto;
          width: 100.3%;
          /* height: 100.3%; */
          /* object-fit: cover; */
        }
        .capturedImage {
          position: absolute;
          top: 0;
          left: 0;
          width: 100.3%;
          border-radius: 1vw;
          /* height: 99%; */
        }
      }
    }
  }
  footer {
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    gap: 6vw;
    button {
      width: 42%;
      text-align: center;
      border: none;
      background-color: transparent;
      outline: none;
      padding: 2vw 0;
      font-size: 5vw;
      font-weight: 600;
      border-radius: 1vw;
      cursor: pointer;
      box-shadow: 0.3vw 0.3vw 0.8vw rgba(0, 0, 0, 0.5);
      transform: translateY(-0.4vw);
      transition: all ease 0.5s;
      &:hover {
        box-shadow: none;
        transform: translateY(0);
      }
    }
    .captureRetake {
      background-color: #c72041;
      color: #f1f1f1;
    }
    .submit {
      border: 0.1vw solid black;
      background-color: transparent;
    }
  }
`;
