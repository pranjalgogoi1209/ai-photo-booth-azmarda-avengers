import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CaptureImagePage from "./pages/CaptureImagePage";
import KnowMorePage from "./pages/KnowMorePage";
import AvatarPage from "./pages/AvatarPage";
import GeneratedImagePage from "./pages/GeneratedImagePage";
import SelectGender from "./pages/SelectGender";

export default function App() {
  const [capturedImage, setCapturedImg] = useState();
  const [generatedImage, setGeneratedImage] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [url, setUrl] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/*  <Route
          path="/select-gender"
          element={
            <SelectGender
              setSelectedGender={setSelectedGender}
              selectedGender={selectedGender}
            />
          }
        /> */}
        <Route
          path="/capture-image"
          element={<CaptureImagePage setCapturedImg={setCapturedImg} />}
        />
        <Route path="/know-more" element={<KnowMorePage />} />
        <Route
          path="/avatar"
          element={
            <AvatarPage
              capturedImage={capturedImage}
              setGeneratedImage={setGeneratedImage}
              selectedGender={selectedGender}
              generatedImage={generatedImage}
              setUrl={setUrl}
            />
          }
        />
        <Route
          path="/generated-image"
          element={
            <GeneratedImagePage
              generatedImage={generatedImage}
              selectedGender={selectedGender}
              url={url}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
