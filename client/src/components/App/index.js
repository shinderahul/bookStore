import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import axios from 'axios';

import Header from '../Header/';
import ModalUser from '../ModalUser/';
import BookList from '../BookList/';
import './App.css';


class App extends Component {

  server = 'http://localhost:3001'; // server = 'http://localhost:3000';

  constructor() {
    super();

    this.state = {
      books: []
    }

    this.handleBookAdded = this.handleBookAdded.bind(this);
  }

  handleBookAdded(book) {
    let books = this.state.books.slice();
    books.push(book);
    this.setState({ books: books });
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <ModalUser
            headerTitle='Add New Book'
            buttonTriggerTitle='Add Book'
            buttonSubmitTitle='Add'
            buttonColor='green'
            onBookAdded={this.handleBookAdded}
           />
          <Divider section />
          <BookList />
        </Container>
      </div>
    );
  }
}

export default App;
