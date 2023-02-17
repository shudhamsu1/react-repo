import "./NewEventForm.css";

import React, { useState } from "react";

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  //   const handleChange = (e) => {
  //     setTitle(e.target.value);
  //   };
  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  const handleSubmit = (e) => {
    //here we are using prevent default to prevent the default behavior of the browser which is to refresh after submitting
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000),
    };
    console.log(event);
    addEvent(event);
    resetForm();
  };
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      {/* <label htmlFor="title">Event Title</label>
      <input type="text" id="title" /> */}
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <button>Submit</button>
      {/* <p>
        {" "}
        title - {title}, date-{date}
      </p>
      <p onClick={resetForm}>Reset the form</p> */}
    </form>
  );
}
