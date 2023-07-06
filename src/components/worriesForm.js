import React, { useState } from "react";

function App() {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "" }]);
  };

  return (
    <div>
      {inputList.map((x, i) => {
        return (
          <div key={i}>
            <input
              name="worries"
              placeholder="Tell me a worry"
              value={x.firstName}
              onChange={(e) => handleInputChange(e, i)}
            />
            {/* <br/>
            <input
              className="ml10"
              name="lastName"
              placeholder="Enter Last Name"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            /> */}
            {inputList.length !== 1 && (
              <button className="ml10" onClick={() => handleRemoveClick(i)}>
                Remove
              </button>
            )}
            {inputList.length - 1 === i && (
              <button className="ml10" onClick={handleAddClick}>
                Add
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
