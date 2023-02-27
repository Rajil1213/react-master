import React from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

function App() {
  const closeModal = () => {
    console.log("Modal Closed?");
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      <Modal closed={closeModal} />
      <Backdrop />
      <button className="Button">Open Modal</button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
