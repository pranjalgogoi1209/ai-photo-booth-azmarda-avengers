import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AvatarMobile from "../components/avatar/mobile/AvatarMobile";

export default function AvatarPage({
  capturedImage,
  setGeneratedImage,
  selectedGender,
  generatedImage,
  setUrl,
}) {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState();

  capturedImage && console.log("captured Image =>", capturedImage);
  selectedImage && console.log("selected Image =>", selectedImage);

  // toast options
  const toastOptions = {
    position: "top-left",
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
       .post("https://h.ngrok.dev/rec", {
          image: capturedImg.split(",")[1],
          choice: selectedImage.split(",")[1],
          status: "PREMIUM",
        })
        .then(function (response) {
          console.log(response);
          // getScaleImage()
          setGeneratedImage(`data:image/webp;base64,${response.data.result}`);

          // upload image on server
          axios
            .post("https://adp24companyday.com/aiphotobooth/upload.php", {
              // img: generatedImage.split(",")[1],
              img: response.data.result,
            })
            .then(function (response) {
              console.log(response);
              // setUrl(response.data.url);
              setUrl(response.data.url);
              console.log("image uploaded");
            })
            .catch(function (error) {
              console.log(error);
            });
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
      <div className="mobile">
        <AvatarMobile
          selectedGender={selectedGender}
          handleSubmit={handleSubmit}
          setSelectedImage={setSelectedImage}
          generatedImage={generatedImage}
        />
      </div>
      <ToastContainer />
    </AvatarPageWrapper>
  );
}

const AvatarPageWrapper = styled.div``;
