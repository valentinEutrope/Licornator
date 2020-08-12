import React, { useState } from "react";
import styled from "@emotion/styled";
import KeyHandler, { KEYPRESS } from "react-key-handler";
import "./App.css";

const Unicorn = styled.div`
  position: absolute;
  left: ${props => props.x};
  top: ${props => props.y};
  tranition: all 0.2s;
  &:hover {
    color: white;
  }
`;

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const speed = 4;

  return (
    <div className="App">
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="d"
        onKeyHandle={() =>
          setPosition({ x: position.x + speed, y: position.y })
        }
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="q"
        onKeyHandle={() =>
          setPosition({ x: position.x - speed, y: position.y })
        }
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="s"
        onKeyHandle={() =>
          setPosition({ x: position.x, y: position.y + speed })
        }
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="z"
        onKeyHandle={() =>
          setPosition({ x: position.x, y: position.y - speed })
        }
      />
      <Unicorn x={position.x} y={position.y}>
        <img src={require("./images/unicorn.png")} alt="player" width={48} />
      </Unicorn>
    </div>
  );
}

export default App;
