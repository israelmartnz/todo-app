import { useState } from "react";
import List from "./components/List";
import Searchbar from "./components/Searchbar";
import "./styles.css";
export default function App() {
  const [reminderList, setReminderList] = useState([]);
  return (
    <div className="App">
      <h1 className="app--title">Things to do:</h1>
      <List reminderList={reminderList} setReminderList={setReminderList} />
    </div>
  );
}
