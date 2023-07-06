import React, { useState } from "react";

const CloudForm = ({ setWorries }) => {
  const [text, setText] = useState("");
  // const [worries, setWorries] = useState([]);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    const worriesArray = text.split(",").map((worry) => worry.trim());
    console.log("clicked!", worriesArray);
    setWorries(worriesArray);
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <textarea
          style={{ height: "20vh", width: "40vh" }}
          placeholder="Tell me your worries. For multiple worries, place a comma between each one."
          value={text}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button style={{ marginLeft: "22vh" }} onClick={handleButtonClick}>
          Send to Clouds
        </button>
      </div>
    </div>
  );
};

export default CloudForm;
