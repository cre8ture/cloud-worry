import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./styles.css";

export default function ReactTypingEffectDemo(props) {
  const [line, setLine] = React.useState(0);
  console.log(props.text);

  return (
    <>
      {/* {props.text.map((item, index) => ( */}
      <>
        <ReactTypingEffect
          key={props.text}
          text={props.text}
          // speed={500}
          // typingDelay={3000}
          // eraseDelay={99999999} />
          speed={50}
          typingDelay={1000}
          eraseDelay={999999}
          cursorRenderer={(cursor) => <> </>}
          displayTextRenderer={(text, i) => {
            return (
              <p>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={i % 2 === 0 ? { color: "black" } : {}}
                    >
                      {char === "\\" ? <br key={key} /> : char}
                    </span>
                  );
                })}
              </p>
            );
          }}
        />

        <br />
      </>

      {/* ))} */}
    </>
  );
}
