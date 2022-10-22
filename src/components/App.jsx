import React, { Component } from 'react';
import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
// import { nanoid } from 'nanoid'

class App extends Component {
  state = {
  contacts: [],
  name: '',
  number: ''
}

  render() {
    const { contacts, name, number } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <form>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <button type="submit">Add contact</button>
          </form>
        </Section>
        <Section title="Contacts">
          <Contacts contacts={contacts} />            
        </Section>
      </>
    );
  }
}

export default App;
