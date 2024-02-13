
import { useReducer } from "react";
import phoneBookReducer from "../reducers/phoneBookReducer";
import { initialPhoneBook } from "../data";

const usePhonebook = () => {
    const [phoneBook, dispatchPhoneBook] = useReducer(
        phoneBookReducer,
        initialPhoneBook
      );
      const handleAddPerson = (person) => {
        dispatchPhoneBook({ type: "add", payload: person });
      };
      const handleRemovePerson = (index) => {
        dispatchPhoneBook({ type: "remove", index});
      }
      return {
        phoneBook,
        handleAddPerson,
        handleRemovePerson,
      }
}

export default usePhonebook;