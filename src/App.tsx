import React, { useState } from "react";
import "./App.css";
import Transition, { TransitionStatus } from "react-transition-group/Transition";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [showBlock, setShowBlock] = useState<boolean>(false);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      <button
        onClick={() => {
          setShowBlock((prevShowBlock) => !prevShowBlock);
        }}
      >
        Toggle
      </button>
      <br />
      <Transition in={showBlock} timeout={500} mountOnEnter unmountOnExit>
        {(state: TransitionStatus) => (
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "auto",
              opacity: state === "exiting" ? 0 : 1,
              transition: "opacity 1s ease-out",
            }}
          ></div>
        )}
      </Transition>
      <Modal closed={closeModal} show={modalIsOpen} />
      <Backdrop show={modalIsOpen} />
      <button className="Button" onClick={showModal}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
