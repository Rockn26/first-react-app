import Person from "./components/Person";
import { useReducer, useState } from "react";
import { initialPhoneBook } from "./data";

import "./App.css";
const phoneBookReducer = (state, action) => {
  switch (action.type) {
    case "add":
     return [...state, action.payload]
    case "remove":
      const newState = [...state];
       newState.splice(action.index, 1);
        return newState;
 
  }
};

function App() {
  const [phoneBook, dispatchPhoneBook] = useReducer(
    phoneBookReducer,
    initialPhoneBook
  );
  const handleAddPerson = (person) => {
    setPhoneBook((prev) => [person, ...prev]);
  };
  return (
    <>
      <button
        onClick={() =>
          handleAddPerson({
            avatar: "https://i.pravatar.cc/150?img=3",
            name: "John Smith",
            phoneNumbers: [
              { name: "home", number: "1234567890" },
              { name: "work", number: "9876543210" },
            ],
            addresses: [
              { name: "home", address: "123 Main St" },
              { name: "work", address: "789 Elm St" },
            ],
            emails: [{ name: "personal", email: "ee@aa.com" }],
          })
        }
      >
        Ekle
      </button>
      {phoneBook.map((person) => {
        return (
          <Person
            key={person.name}
            avatar={person.avatar}
            name={person.name}
            phoneNumbers={person.phoneNumbers}
            addresses={person.addresses}
            emails={person.emails}
          />
        );
      })}
    </>
  );
}

export default App;
