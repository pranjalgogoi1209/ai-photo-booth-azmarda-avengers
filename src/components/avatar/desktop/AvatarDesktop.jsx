import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { freedomFighters } from "../utils/constants";
import logo from "./../assets/logo.png";
import select from "./../assets/select.png";

export default function AvatarDesktop({
  capturedImage,
  setGeneratedImage,
  selectedGender,
}) {
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState();
  const [selectedImage, setSelectedImage] = useState();

  capturedImage && console.log("capturedImage =>", capturedImage.split(",")[1]);
  selectedImage && console.log("selectedImage =>", selectedImage.split(",")[1]);

  // converting selectedImage to base64 format
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const getImageData = img => {
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
    return canvas.toDataURL("image/png");
  };

  // toast options
  const toastOptions = {
    position: "bottom-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  // submitting the selected image and post request to api
  const handleSubmit = () => {
    console.log("clicked");
    setGeneratedImage("");
    if (selectedImage) {
      axios
        .post("https://396e-103-17-110-13.ngrok-free.app/rec", {
          image: capturedImage.split(",")[1],
          choice: selectedImage.split(",")[1],
        })
        .then(function (response) {
          console.log(response);
          setGeneratedImage(`data:image/webp;base64,${response.data.result}`);
        })
        .catch(function (error) {
          console.log(error);
        });
      navigate("/generated-image");
    } else {
      toast.error("Please select an image...", toastOptions);
    }
  };
  return (
    <AvatarPageWrapper>
      {/* header starts here */}
      <header>
        <div className="title">
          <h1>Select Your Avatar</h1>
        </div>
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </header>
      {/* header ends here */}
      {/* main starts here */}
      <main>
        {freedomFighters &&
          freedomFighters.map((src, index) => (
            <div
              key={index}
              className="singleImageContainer"
              id={(index == 2) | (index == 6) ? "mt" : ""}
              onClick={() => {
                setSelectedImageIndex(index);
                var img = new Image();
                img.src = src;
                img.onload = () => {
                  setSelectedImage(getImageData(img));
                };
              }}
            >
              <div className="imageParent">
                <img src={src} alt="freedom fighter" />
                <div className="imageHoverContainer"></div>
              </div>
              <img
                src={select}
                alt="selected"
                className={`selectIcon ${
                  selectedImageIndex === index ? "showSelectIcon" : ""
                }`}
              />
            </div>
          ))}
      </main>
      <footer>
        <button onClick={handleSubmit}>Submit</button>
      </footer>
      <ToastContainer />
    </AvatarPageWrapper>
  );
}

const AvatarPageWrapper = styled.div`
  /* width: 100vw; */
  padding-bottom: 2vw;
  /* header starts here */
  header {
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-between;
    .title {
      /* border: 1px solid red; */
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 10vw;
      h1 {
        border: 0.15vw solid black;
        padding: 0.1vw 0.4vw;
        font-size: 3vw;
        font-weight: 600;
        border-radius: 0.7vw;
      }
    }
    .logo {
      width: 10vw;
      height: 10vw;
      /* border: 1px solid red; */
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  /* header ends here */

  /* main starts here */
  main {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5vw;
    flex-wrap: wrap;
    height: 45vw;
    width: 70%;
    margin: 1vw auto 0 auto;
    .singleImageContainer {
      /* border: 1px solid black; */
      box-shadow: 0.1vw 0.1vw 0.4vw rgba(0, 0, 0, 0.5);
      border-radius: 0.9vw;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      border: 0.15vw solid #fff;
      .imageParent {
        /* position: relative; */
        height: 100%;

        img {
          width: 12vw;
          height: 100%;
          box-shadow: 0.1vw 0.1vw 0.4vw rgba(0, 0, 0, 0.5);
          border-radius: 0.9vw;

          transition: all ease 0.5s;
        }
        &:hover img {
          transform: scale(1.1);
        }
        &:hover .imageHoverContainer {
          opacity: 1;
        }
        .imageHoverContainer {
          background: linear-gradient(
            transparent,
            transparent,
            rgba(0, 0, 0, 1)
          );
          opacity: 0;
          /* border: 1px solid black; */
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 0.9vw;
          transition: all ease 0.5s;
        }
      }
      .selectIcon {
        display: none;
        position: absolute;
        bottom: 5%;
        left: 40%;
        width: 3vw;
      }
      .showSelectIcon {
        display: flex;
      }
    }
    #mt {
      margin-top: 5vw;
    }
  }
  /* main ends here */

  /* footer starts here */
  footer {
    /* border: 1px solid purple; */
    button {
      border: none;
      outline: none;
      padding: 0.5vw 2vw;
      font-weight: 600;
      font-size: 1.5vw;
      border-radius: 0.6vw;
      cursor: pointer;
      background-color: #fcb017;
      margin: 0 auto;
      display: block;
      box-shadow: 0.1vw 0.1vw 0.4vw rgba(0, 0, 0, 0.5);
      transform: translateY(-0.1vw);
      transition: all ease 0.5s;
      &:hover {
        box-shadow: none;
        transform: translateY(0);
      }
    }
  }
  /* footer ends here */

  /*   @media screen and (min-width: 1440px) {
    main {
      background-color: red;
      height: 100vh;
    }
  }

  @media screen and (max-width: 1440px) {
    main {
      height: 95vh;
    }
  }

  @media screen and (max-width: 1440px) {
    main {
      height: 95vh;
    }
  }

  @media screen and (max-width: 1340px) {
    main {
      height: 90vh;
    }
  }

  @media screen and (max-width: 1024px) {
    main {
      height: 90vh;
    }
  }
  @media screen and (max-width: 1024px) {
    background: url("./../src/assets/tablet-background-image.png");
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    height: 100%;
  }*/
`;
