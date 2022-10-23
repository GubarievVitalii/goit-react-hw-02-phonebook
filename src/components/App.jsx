import React, { Component } from 'react';
import Contacts from './Contacts/Contacts';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onInputChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  
  onAddContact = (name, number) => {
    const newContact = this.state.contacts.find(el => el.name.toLowerCase() === name.toLowerCase())
    if (newContact) {
    alert(`${name} is already is in contacts.`);
      return;
    }  
    this.setState(prevState => ({ contacts: [...prevState.contacts, { id: nanoid(), name, number }] }))
  };

  onFilterContact = event => this.setState({ filter: event.target.value });

  deteteContact = id => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(el => el.id !== id) }))
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const filteredContacts = contacts.filter(({name})=>name.toLowerCase().includes(filter.toLowerCase()))
    return (
      <div>
        <h1>Phonebook</h1>
          <Form
            onInputChange={this.onInputChange}
            name={name}
            number={number}
            onAddContact={this.onAddContact}
          />
        <h2>Contacts</h2>
          <Filter onFilterContact={this.onFilterContact} filter={filter}/>
        <Contacts contacts={filteredContacts} deteteContact={this.deteteContact}/>        
      </div>
    );
  }
}

export default App;
