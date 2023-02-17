import React, { useState } from "react";
import { Title } from "./components/Title";
import Modal from "./components/Modal";
import "./app.css";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  // const [name, setName] = useState("mario");
  const [events, setEvents] = useState([
    // { title: "mario bash", id: 1 },
    // { title: "live bash", id: 2 },
    // { title: "race bash", id: 3 },
    //here we are going to create function inside this component add the new event
    //to the state and we will pass the function as a prop into the new event from component
    //so we can call it from neweventform
  ]);

  const addEvent = (event) => {
    //so the below line takes the current events, and its spreads into the new arrya and add the rest
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  console.log(showEvents);

  const handleClick = (id) => {
    // setName("luigi");
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => event.id != id);
    });
    console.log(id);
  };

  // const handleClose = () => {
  //   setShowModal(false);
  // };

  return (
    <div className="App">
      <Title title="our Services" subTitle="services" />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events </button>
        </div>
      )}
      {/* //this only shows when the showEvents is false */}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events </button>
        </div>
      )}
      {/* <h1>My name is {name}</h1>
      <button onClick={handleClick}> Change name</button> */}
      {/* if showevents is true then the rest of the function is going to evaluate else */}
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {/* Down here we are using the children props so that we can pass the elements inside the
       modal to the modal component as props.children as use it there so that it is reusable    */}
      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      {/* <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div> */}
      <div>
        <button onClick={() => setShowModal(true)}>Add new events</button>
      </div>
    </div>
  );
}

export default App;
