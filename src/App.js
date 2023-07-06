import "./styles.css";
import Cloud1 from "./assets/cloud1.svg";
import NormWorries from "./components/normForm";
import Poem from "./components/poem";
import Worries from "./components/worriesForm";
import { useState } from "react";
import WorryCoud from "./components/worryCloud";

export default function App() {
  const [worries, setWorries] = useState([]);

  // create new cloud images
  const urls = [
    "https://static.thenounproject.com/png/27338-200.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cartoon_cloud.svg/2560px-Cartoon_cloud.svg.png",
    "https://www.kindpng.com/picc/m/42-421498_clouds-clipart-png-transparent-transparent-background-cloud-clipart.png"
  ];

  let currentIndex = 0;

  function updateBackgroundImage() {
    const elements = document.querySelectorAll(".cloud");
    elements.forEach((element) => {
      element.style.backgroundImage = `url(${urls[currentIndex]})`;
    });
    currentIndex = (currentIndex + 1) % urls.length;
  }

  const animationDuration = 15000; // duration of the dissipate animation in milliseconds
  setInterval(updateBackgroundImage, animationDuration);

  return (
    <>
      <h1>Cloud</h1>
      <div>
        <Poem />
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <NormWorries setWorries={setWorries} />
        <WorryCoud worries={worries} />
      </div>
      <div className="frontal">
        <div className="cloud sky2"></div>
        <div />
        <img
          style={{ zIndex: -100 }}
          className="mtn"
          src="https://designlooter.com/images/mountain-svg-17.png"
          alt="example"
        />
      </div>
    </>
  );
}
