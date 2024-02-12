import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import exportAsImage from "../utils/exportAsImage";
import logo from "./../assets/logo.png";
import frame from "./../assets/generated-image-frame.png";
import { useReactToPrint } from "react-to-print";
import EmailFeature from "../components/modal/EmailFeature";
import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import axios from "axios";

export default function GeneratedImagePage({ generatedImage, selectedGender }) {
  const exportRef = useRef();
  const printRef = useRef();
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  generatedImage && console.log(generatedImage);
  const [printImage, setPrintImage] = useState();
  const [showQrPopup, setShowQrPopup] = useState(false);
  const [qr, setQr] = useState("");

  // handle QR code generation

  const handleSubmitQr = () => {
    console.log("submitting qr");
    setShowQrPopup(true);
    axios
      .post("https://adp24companyday.com/aiphotobooth/upload.php", {
        img: generatedImage.split(",")[1],
      })
      .then(function (response) {
        console.log(response);
        setQr(response.data.url);
        console.log(qr);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // handlePrint
  // window.print();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  // handle Email
  const handleEmail = () => {
    console.log("clicked on Email Button");
    setIsEmailOpen(true);
    // document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    if (generatedImage) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = img.width * 1;
        canvas.height = img.height * 1;
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        const scaledImage = canvas.toDataURL("image/png");
        setPrintImage(scaledImage);
      };

      img.src = generatedImage;
    }
  }, [generatedImage]);

  return (
    <GeneratedImageWrapper>
      {/* email feature */}
      {isEmailOpen && (
        <EmailFeature
          setIsEmailOpen={setIsEmailOpen}
          generatedImage={generatedImage}
          className="EmailFeature"
        />
      )}
      <header>
        <Link to={"/"} className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <h1>AI Generated Image</h1>
      </header>

      {printImage ? (
        <div className="generatedImageContainer">
          <div className="generatedImageParent" ref={exportRef}>
            <img
              src={printImage}
              alt="generated image"
              className="generatedImage"
              ref={printRef}
            />
          </div>
          <div className="buttons">
            {/* print feature */}
            {/* <button onClick={handlePrint}>Print</button> */}

            {/* email feature */}
            {/* <button onClick={handleEmail}>Email</button> */}

            {/* regenerate */}
            <Link to={"/avatar"} className="btnLink">
              <button>Regenerate</button>
            </Link>

            {/* qr feature*/}
            <button onClick={handleSubmitQr}>QR</button>
            {showQrPopup && (
              <div className="popup-qr">
                <div className="qr">
                  <div
                    className="closePopup"
                    onClick={() => setShowQrPopup(false)}
                  >
                    <IoIosCloseCircle />
                  </div>
                  <h1>Scan this QR to get image</h1>
                  <QRCode size={256} value={qr} />
                </div>
              </div>
            )}

            <button
              onClick={() =>
                exportAsImage(
                  exportRef.current,
                  "ai-photobooth-azmarda-avengers"
                )
              }
            >
              Download
            </button>
          </div>
        </div>
      ) : (
        <div className="loading">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </GeneratedImageWrapper>
  );
}

const GeneratedImageWrapper = styled.div`
  /* border: 1px solid red; */
  height: 100vh;
  padding: 4vw;
  display: flex;
  flex-direction: column;
  gap: 5vw;
  .EmailFeature {
    height: 100%;
    position: absolute;
  }
  .popup-qr {
    /* border: 10px solid black; */
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .qr {
      background-color: #f1f1f1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5vw;
      color: #000;
      height: 75vw;
      padding: 5vw;
      padding-top: 0;
      border-radius: 2vw;
      h1 {
        font-size: 5vw;
        font-weight: bold;
      }
    }
  }

  .closePopup {
    /* position: absolute; */
    /* top: 5%; */
    /* right: 5%; */
    color: red;
    margin-left: auto;
    /* border: 1px solid black; */
    svg {
      font-size: 8vw;
    }
  }
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
  .generatedImageContainer {
    /* border: 1px solid black; */
    /* height: 150vw; */
    display: flex;
    flex-direction: column;
    gap: 10vw;
    margin-top: 3vw;
    justify-content: space-between;
    .generatedImageParent {
      /* border: 1px solid black; */
      margin: 0 auto;
      width: 80vw;
      /* position: relative; */
      background-color: #000;
      .generatedImage {
        width: 100.3%;
        height: 100.3%;
        box-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.6);
        /* border-radius: 3.5vh; */
      }
      .frame {
        position: absolute;
        top: 0;
        left: 0;
        width: 100.3%;
        height: 100.3%;
      }
    }

    /* border: 1px solid black; */
    .buttons {
      display: flex;
      justify-content: center;
      gap: 3vw;
      .btnLink {
        /* border: 1px solid black; */
        width: 30%;
        button {
          width: 100%;
        }
      }
      button {
        width: 27%;
        text-align: center;
        border: none;
        background-color: transparent;
        outline: none;
        padding: 2vw 0;
        font-size: 4vw;
        font-weight: 600;
        border-radius: 1vw;
        cursor: pointer;
        box-shadow: 0.3vw 0.3vw 0.8vw rgba(0, 0, 0, 0.5);
        transform: translateY(-0.4vw);
        transition: all ease 0.5s;
        background-color: #c72041;
        color: #f1f1f1;
        &:hover {
          box-shadow: none;
          transform: translateY(0);
        }
      }
    }
  }

  /* loading starts here */
  .loading {
    margin: auto;
    .lds-ring {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid #fff;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  /* loading ends here */
`;
