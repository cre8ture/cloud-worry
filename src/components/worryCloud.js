import React from "react";

const Clouds = ({ worries }) => {
  const getRandomSize = () => {
    // Generate a random size between 50% and 150% of the original size
    const minSize = 0.5;
    const maxSize = 1.0;
    return Math.random() * (maxSize - minSize) + minSize;
  };

  const getRandomPosition = () => {
    // Generate a random position between -30px and 30px
    const minPosition = -30;
    const maxPosition = 30;
    return Math.random() * (maxPosition - minPosition) + minPosition;
  };

  return (
    <div>
      {worries.map((worry, index) => (
        <div
          key={index}
          className="cloud sky1"
          style={{
            position: "relative",
            left: `${getRandomPosition()}px`, // Variation in horizontal position
            top: `${getRandomPosition() * 3}px`, // Variation in vertical position
            zIndex: -worries.length - index, // Variation in z-index
            transform: `scale(${getRandomSize()})` // Variation in size
          }}
        >
          {/* <img src={Cloud1} alt="BigCo Inc. logo"/> */}
          <span className="centered-word">{worry}</span>
        </div>
      ))}
    </div>
  );
};

export default Clouds;
