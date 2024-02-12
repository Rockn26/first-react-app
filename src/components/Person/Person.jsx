import PersonInformationList from "./PersonInformationList";
import { useState } from "react";
import PropTypes from 'prop-types';

const personListTypes = [
  {
    title: "Phone Numbers",
    fieldName: "phoneNumbers",
    labelField: "name",
    valueField: "number",
  },
  {
    title: "Adresses",
    fieldName: "addresses",
    labelField: "name",
    valueField: "address",
  },
  {
    title: "Emails",
    fieldName: "emails",
    labelField: "name",
    valueField: "email",
  },
];

const Person = (props) => {
  const [activeListType, setActiveListType] = useState("emails");
  const handleListTypeChange = (newListType) => {
    setActiveListType(newListType);
  };
  return (
    <div className="divdir">
      <img className="person-avatar" src={props.avatar} alt="avatar" />
      <h1 className="person-name">{props.name}</h1>
      {personListTypes.map((listType) => {
        return (
          <PersonInformationList
            key={listType.fieldName}
            type={listType}
            activeType={activeListType}
            personData={props}
            onListTypeChange={handleListTypeChange}
          />
        );
      })}
    </div>
  );
};

Person.propTypes = {
    name: PropTypes.string.isRequired,
}

Person.defaultProps = {
    name: "Unknown",
}

export default Person;
