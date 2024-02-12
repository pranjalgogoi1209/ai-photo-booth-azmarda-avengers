import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.png";

import {
  avenger01,
  avenger02,
  avenger03,
  avenger04,
  avenger05,
  avenger06,
  avenger07,
  avenger08,
} from "./../../../assets/home-page/index";

export default function HomeMobile() {
  return (
    <HomeMobileWrapper>
      <header>
        <Link to={"/"} className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <h1>AI Photobooth</h1>
      </header>

      <main>
        {/* first container */}
        <div className="firstContainer">
          <div className="imgContainer1 imgCnt">
            <img src={avenger01} alt="img1" />
          </div>
          <div className="imgContainer2 imgCnt">
            <img src={avenger02} alt="img2" />
          </div>
        </div>

        {/* second container */}
        <div className="secondContainer">
          <div className="imgContainer">
            <img src={avenger03} alt="img3" />
          </div>
          <div className="imgContainer">
            <img src={avenger04} alt="img4" />
          </div>
          <div className="imgContainer">
            <img src={avenger05} alt="img5" />
          </div>
        </div>

        {/* third container */}
        <div className="thirdContainer">
          <div className="imgContainer">
            <img src={avenger06} alt="img6" />
          </div>
          <div className="imgContainer">
            <img src={avenger07} alt="img7" />
          </div>
          <div className="imgContainer">
            <img src={avenger08} alt="img8" />
          </div>
        </div>
      </main>

      <section className="lower">
        <div className="buttons">
          <Link to={"/capture-image"}>
            <button className="startNow">Start Now</button>
          </Link>
          {/* <Link to={"https://techkilla.com/ai-photo-booth"}>
            <button className="knowMore">Know More</button>
          </Link> */}
        </div>
      </section>
    </HomeMobileWrapper>
  );
}

const HomeMobileWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 100vh;
  padding: 4vw;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 5vw;
  /* align-items: center; */
  /* header */
  header {
    /* border: 1px solid purple; */
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
    flex-direction: column;
    gap: 3vw;
    img {
      transition: all ease 0.5s;
    }
    img:hover {
      transform: scale(1.05);
    }
    /* first container */
    .firstContainer {
      display: flex;
      justify-content: space-between;
      /* gap: 4vw; */
      .imgContainer1 {
        width: 53vw;
        /* height: 40vw; */
      }
      .imgContainer2 {
        width: 34vw;
        /* height: 37vw; */
      }
      .imgCnt {
        /* border: 1px solid black; */
        border-radius: 3vw;
        img {
          border-radius: 3vw;
          height: 100%;
          width: 100%;
          box-shadow: 0.5vw 0.5vw 0.5vw rgba(0, 0, 0, 0.5);
          border: 0.2vw solid #fff;
        }
      }
    }
    /* second container */
    .secondContainer {
      display: flex;
      justify-content: space-between;
      /* gap: 4vw; */
      border-radius: 3vw;
      .imgContainer {
        width: 28vw;
        img {
          border-radius: 3vw;
          height: 100%;
          width: 100%;
          box-shadow: 0.5vw 0.5vw 0.5vw rgba(0, 0, 0, 0.5);
          border: 0.2vw solid #fff;
        }
      }
    }

    /* third container */
    .thirdContainer {
      display: flex;
      justify-content: space-between;
      /* gap: 4vw; */
      border-radius: 3vw;
      .imgContainer {
        width: 28vw;
        img {
          border-radius: 3vw;
          height: 100%;
          width: 100%;
          box-shadow: 0.5vw 0.5vw 0.5vw rgba(0, 0, 0, 0.5);
          border: 0.15vw solid #fff;
        }
      }
    }
  }
  .lower {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    gap: 3vw;

    .buttons {
      /* border: 1px solid red; */
      display: flex;
      justify-content: center;
      align-items: center;
      .startNow,
      .knowMore {
        border: none;
        outline: none;
        padding: 1vw 2.5vw;
        font-weight: 600;
        font-size: 5vw;
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
      .startNow {
        background-color: #c72041;
        color: #f1f1f1;
      }
      /*   .knowMore {
        border: 0.1vw solid black;
        background-color: transparent;
      } */
    }
  }
`;
