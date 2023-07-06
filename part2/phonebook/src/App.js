import React, { useState, useEffect } from 'react';
import Filtrator from './components/Filtrator';
import AddFormer from './components/AddFormer';
import Numbers from './components/Numbers';
import personsService from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState({ message: null, isError: false });

  const addPerson = (event) => {
    event.preventDefault();
    const found = persons.find(({ name }) => name === newName);
    if (!found) {

      const newPerson = {
        name: newName,
        number: newNumber,
      };

      personsService
        .create(newPerson)
        .then(retPerson => {
          setPersons(persons.concat(retPerson));
          setNewName('');
          setNewNumber('');
          setErrorMessage(
            { message: `Added ${retPerson.name}`, isError: false }
          );
          setTimeout(() => {
            setErrorMessage({ message: null });
          }, 2000);
        }).catch(error => {
          setErrorMessage(
            { message: error.response.data.error, isError: true }
          );
          setTimeout(() => {
            setErrorMessage({ message: null });
          }, 2000);
        });

    } else if (found && newNumber.length > 0) {

      if (window.confirm(`${newName} is allready added to phonebook, replace the old number with a new one?`)) {
        const newPerson = { ...found, number: newNumber };

        personsService
          .update(newPerson.id, newPerson)
          .then(returnedPerson => {
            setPersons(persons.map(prs => prs.id !== newPerson.id ? prs : returnedPerson));
            setErrorMessage(
              { message: `${newName} number changed`, isError: false }
            );
            setTimeout(() => {
              setErrorMessage({ message: null });
            }, 2000);
          })
          .catch(error => {
            setErrorMessage(
              { message: error.response.data.error, isError: true }
            );
            setTimeout(() => {
              setErrorMessage({ message: null });
            }, 2000);
            //setPersons(persons.filter(p => p.id !== newPerson.id));
            personsService
              .getAll()
              .then(initPersons => {
                setPersons(initPersons);
              });
          });


      }
    } else {
      setErrorMessage(
        { message: `${newName} is already added to phonebook`, isError: true }
      );
      setTimeout(() => {
        setErrorMessage({ message: null });
      }, 2000);
    }
  }

  const deletePerson = (event) => {
    event.preventDefault();
    const exId = event.target.value.toString();
    const exterminated = persons.find(p => p.id.toString() === exId);
    if (window.confirm(`Do you really want to delete ${exterminated.name}?`)) {
      personsService.exterminate(exId);
      const newPersons = persons.filter((value) => { return value.id.toString() !== exId });
      setPersons(newPersons);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const personsToShow = !filter
    ? persons
    : persons.filter(person => person.name.match(RegExp(filter, 'i')));

  useEffect(() => {
    personsService
      .getAll()
      .then(initPersons => {
        setPersons(initPersons);
      });
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} />
      <Filtrator filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add new</h2>
      <AddFormer addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Numbers personsToShow={personsToShow} deleteCallback={deletePerson} />
    </div>
  );
}

export default App;