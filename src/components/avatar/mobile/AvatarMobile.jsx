import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "./../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import select from "./../../../assets/select.png";
import { avengerCardsActual } from "../../../utils/constantsActual";
import { avengers } from "./../../../utils/constants";
import { Link } from "react-router-dom";

export default function AvatarMobile({
  selectedGender,
  handleSubmit,
  setSelectedImage,
  generatedImage,
}) {
  const [cards, setCards] = useState();

  const [selectedImageIndex, setSelectedImageIndex] = useState();

  // converting selectedImage to base64 format
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const getImageData = img => {
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
    return canvas.toDataURL("image/png");
  };

  /* selectedGender &&
    useEffect(() => {
      if (selectedGender.toLowerCase() === "female") {
        setCards(femaleCards);
      } else if (selectedGender.toLowerCase() === "male") {
        setCards(maleCards);
      }
    }, [selectedGender]); */

  cards && console.log(cards);

  // filtering card image with actual image
  /* const filterActualImg = index => {
    if (selectedGender.toLowerCase() === "female") {
      const filteredActualImgArr = femaleCardsActual.filter(
        (actualImg, ActualIndex) => ActualIndex === index
      );
      return filteredActualImgArr[0];
    } else if (selectedGender.toLowerCase() === "male") {
      const filteredActualImgArr = maleCardsActual.filter(
        (actualImg, ActualIndex) => ActualIndex === index
      );
      return filteredActualImgArr[0];
    }
  }; */

  const filterActualImg = index => {
    const filteredActualImgArr = avengerCardsActual.filter(
      (actualImg, ActualIndex) => ActualIndex === index
    );
    return filteredActualImgArr[0];
  };

  return (
    <AvatarMobileWrapper>
      <header>
        <Link to={"/"} className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <h1>Select Your Avatar</h1>
      </header>

      <main>
        {avengers?.map((src, index) => (
          <div
            key={index}
            className="singleImageContainer"
            id={index == 3 ? "mt" : ""}
            onClick={() => {
              setSelectedImageIndex(index);
              console.log("img", src);
              var img = new Image();
              const actualImg = filterActualImg(index);
              img.src = actualImg;
              img.onload = () => {
                console.log("actual+>", actualImg);
                setSelectedImage(getImageData(img));
              };
            }}
          >
            <div className="imageParent">
              <img src={src} alt="modals" />
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
    </AvatarMobileWrapper>
  );
}

const AvatarMobileWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 100vh;
  padding: 4vw;
  display: flex;
  flex-direction: column;
  gap: 5vw;
  /* justify-content: space-between; */
  gap: 5vw;
  /* align-items: center; */
  header {
    /* border: 1px solid purple; */
    display: flex;
    flex-direction: column;
    gap: 3vw;
    .logo {
      margin: 0 auto;
      width: 12vw;
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
    height: 150vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2vw;

    .singleImageContainer {
      /* border: 1px solid black; */
      box-shadow: 0.1vw 0.1vw 0.4vw rgba(0, 0, 0, 0.5);
      border-radius: 0.9vw;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      border: 0.2vw solid #f1f1f1;
      width: 29vw;
      border-radius: 3vw;

      .imageParent {
        /* border: 1px solid black; */
        /* position: relative; */
        height: 100%;
        width: 100%;

        img {
          width: 100%;
          height: 100%;
          box-shadow: 0.5vw 0.5vw 0.5vw rgba(0, 0, 0, 0.5);
          border-radius: 3vw;

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
        bottom: 7%;
        left: 40%;
        width: 8vw;
      }
      .showSelectIcon {
        display: flex;
      }
    }
    #mt {
      margin-top: 10vw;
    }
  }
  footer {
    margin-bottom: 5vw;
    /* border: 1px solid purple; */
    button {
      width: 100%;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 2vw 0;
      background-color: #c72041;
      color: #f1f1f1;
      font-weight: 600;
      font-size: 5vw;
      border-radius: 1vw;
      box-shadow: 0.3vw 0.3vw 0.8vw rgba(0, 0, 0, 0.5);
      transform: translateY(-0.4vw);
      transition: all ease 0.5s;
      &:hover {
        box-shadow: none;
        transform: translateY(0);
      }
    }
  }
`;
