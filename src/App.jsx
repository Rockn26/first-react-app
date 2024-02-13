import Person from "./components/Person";
import "./App.css";
import usePhonebook from "./hooks/usePhonebook";



function App() {
  const { phoneBook, handleAddPerson, handleRemovePerson } = usePhonebook();

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
      {phoneBook.map((person, idx) => {
        return (
          <Person
            onRemovePerson={()=> handleRemovePerson(idx)}
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
