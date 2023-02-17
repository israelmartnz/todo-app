//Component that renders the reminder list

import { useState } from "react";

export default function List(reminderList, setReminderList) {
  const listItem = { name: "", isComplete: true };
  const [reminder, setReminder] = useState();

  const createReminder = (event) => {
    const reminder = {
      id: "",
      body: "Add your reminder details here",
      isComplete: false
    };
    console.log("reminder created");
    setReminderList((prevReminders) => [reminder, ...prevReminders]);
  };
  /*
  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here"
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }
  */

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="list--container">
      <div className="list--actions">
        <button className="list--button" onClick={createReminder}>
          Create
        </button>
        <input
          className="list--input"
          type="text"
          placeholder="Add new"
          onChange={handleChange}
        />
      </div>
      <div className="list--item">
        <input type="checkbox" />
        <span>{reminderList[0]}</span>
      </div>
    </div>
  );
}
