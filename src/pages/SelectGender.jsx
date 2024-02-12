import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiMale } from "react-icons/bi";
import { BiFemale } from "react-icons/bi";
import logo from "./../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SelectGender({ setSelectedGender, selectedGender }) {
  const navigate = useNavigate();
  const [selectedGenderIndex, setSelectedGenderIndex] = useState();

  const data = [
    { gender: "Male", img: "#", icon: <BiMale />, color: "#6083ce" },
    { gender: "Female", img: "#", icon: <BiFemale />, color: "#fcbbc5" },
  ];

  // toast options
  const toastOptions = {
    position: "top-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const handleSubmit = () => {
    console.log("selectedGender", selectedGender);
    if (selectedGender) {
      navigate("/capture-image");
    } else {
      toast.error("Please select your gender", toastOptions);
    }
  };
  return (
    <SelectGenderWrapper>
      <header>
        <Link to={"/"} className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <h1>Select Your Gender</h1>
      </header>

      <div className="gender">
        {data?.map((item, index) => (
          <div
            key={index}
            className={`genderContainer ${
              index === selectedGenderIndex ? "selectedGender" : ""
            }`}
            onClick={() => {
              setSelectedGenderIndex(index);
              setSelectedGender(item.gender);
            }}
          >
            <div className="icon" style={{ color: `${item.color}` }}>
              {item.icon}
            </div>
            <button>{item.gender}</button>
          </div>
        ))}
      </div>

      <div className="submit" onClick={handleSubmit}>
        <button>Submit</button>
      </div>
      <ToastContainer />
    </SelectGenderWrapper>
  );
}

const SelectGenderWrapper = styled.div`
  /* border: 1px solid red; */
  height: 100vh;
  padding: 4vw;
  display: flex;
  flex-direction: column;
  gap: 15vw;
  justify-content: space-between;
  button {
    border: none;
    outline: none;
    padding: 1vw 2.5vw;
    font-weight: 600;
    font-size: 6vw;
    border-radius: 1vw;
    cursor: pointer;
    box-shadow: 0.3vw 0.3vw 0.8vw rgba(0, 0, 0, 0.5);
    transform: translateY(-0.4vw);
    transition: all ease 0.5s;

    background-color: #c72041;
    color: #f1f1f1;
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
  .gender {
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    gap: 10vw;
    /* margin-bottom: 10vw; */
    .genderContainer {
      /* border: 1px solid black; */
      display: flex;
      flex-direction: column;
      gap: 4vw;
      align-items: center;
      .icon {
        display: flex;
        align-items: center;
        border: 2px solid black;
        border-radius: 4vw;
        font-size: 30vw;
        padding: 4vw 2.5vw;
        transition: background ease 0.5s;
      }
      button {
        width: 100%;
      }
    }
    .selectedGender {
      .icon {
        background-color: #c72041;
        border-color: transparent;
      }
      button {
        box-shadow: none;
        transform: translateY(0);
      }
    }
  }

  .submit {
    /* border: 1px solid black; */
    /* width: 100%; */

    margin: 0 auto;
    button {
      border: none;
      outline: none;
      padding: 2vw 6vw;
      background-color: #c72041;
      color: #f1f1f1;
      /* width: 100%; */
      font-weight: 600;
      font-size: 5vw;
      border-radius: 2vw;
      cursor: pointer;
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
