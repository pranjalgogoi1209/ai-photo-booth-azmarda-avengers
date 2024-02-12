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
} from "../../../assets/home-page/index";

export default function HomeDesktop() {
  return (
    <HomeDesktopWrapper>
      {/* header starts here */}
      <header>
        <h1>AI Photobooth Generator</h1>
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </header>
      {/* header ends here */}

      {/* main starts here */}
      <main>
        <div className="buttons">
          <Link to={"/select-gender"}>
            <button className="startNow">Start Now</button>
          </Link>
          <Link to={"https://techkilla.com/ai-photobooth"}>
            <button className="knowMore">Know More</button>
          </Link>
        </div>
        <div className="images">
          <div className="firstContainer">
            <img src={freedomFighter01} alt="wonder woman" />
          </div>
          <div className="secondContainer">
            <img src={freedomFighter02} alt="natasha" />
            <img src={freedomFighter03} alt="scarlet witch" />
          </div>
          <div className="thirdContainer">
            <div className="thirdContainerChildOne">
              <img src={freedomFighter08} alt="super man" />
            </div>
            <div className="thirdContainerChildTwo">
              <img src={freedomFighter05} alt="hermione granger" />
              <img src={freedomFighter06} alt="super woman" />
            </div>
          </div>
          <div className="fourthContainer">
            <img src={freedomFighter07} alt="aquaman" />
            <img src={freedomFighter04} alt="harry potter" />
          </div>
          <div className="fifthContainer">
            <img src={freedomFighter09} alt="thor" />
          </div>
        </div>
      </main>
      {/* main ends here */}
    </HomeDesktopWrapper>
  );
}

const HomeDesktopWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  /* border: 5px solid red; */
  /* header starts here */
  header {
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-between;
    h1 {
      /* border: 1px solid black; */
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-size: 3.5vw;
      font-weight: 600;
      padding-left: 10vw;
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
    /* border: 1px solid black; */
    margin-top: 2.5vw;
    display: flex;
    flex-direction: column;
    /* buttons starts here */
    .buttons {
      /* border: 1px solid red; */
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1vw;
      .startNow,
      .knowMore {
        border: none;
        outline: none;
        padding: 0.5vw 2vw;
        font-weight: 600;
        font-size: 1.5vw;
        border-radius: 0.6vw;
        cursor: pointer;
        box-shadow: 0.1vw 0.1vw 0.4vw rgba(0, 0, 0, 0.5);
        transform: translateY(-0.1vw);
        transition: all ease 0.5s;
        &:hover {
          box-shadow: none;
          transform: translateY(0);
        }
      }
      .startNow {
        background-color: #fcb017;
      }
      .knowMore {
        border: 0.1vw solid black;
        background-color: transparent;
      }
    }
    /* buttons ends here */
    /* images starts here */
    .images {
      /* border: 1px solid blue; */
      height: 90vh;
      display: flex;
      justify-content: center;
      gap: 1vw;
      img {
        box-shadow: 0.1vw 0.1vw 0.4vw rgba(0, 0, 0, 0.5);
        border-radius: 0.9vw;
        border: 0.15vw solid #fff;
      }
      img:hover {
        transform: scale(1.07);
      }
      .firstContainer,
      .fifthContainer {
        /* border: 1px solid black; */
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 13vw;
          transition: all ease 0.5s;
        }
      }
      .secondContainer,
      .fourthContainer {
        /* border: 1px solid black; */
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1vw;
        img {
          width: 12vw;
          transition: all ease 0.5s;
        }
      }
      .thirdContainer {
        /* border: 1px solid black; */
        padding-top: 7vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5vw;
        .thirdContainerChildOne {
          img {
            width: 22vw;
            transition: all ease 0.5s;
          }
        }
        .thirdContainerChildTwo {
          /* border: 1px solid green; */
          display: flex;
          align-items: flex-start;
          gap: 2vw;
          img:first-child {
            width: 11vw;
          }
          img:last-child {
            width: 9vw;
          }
          img {
            transition: all ease 0.5s;
          }
        }
      }
    }
    /* images ends here */
  }
  /* main ends here */
`;
