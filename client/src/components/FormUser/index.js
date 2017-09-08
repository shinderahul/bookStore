import React from 'react';
import { Form, Select, Message, Button } from 'semantic-ui-react';
import axios from 'axios';

const languageOptions = [
  { key: 'e', text: 'English', value: 'English' },
  { key: 'h', text: 'Hindi', value: 'Hindi' },
  { key: 'o', text: 'Other', value: 'Other' }
]

const formatOptions = [
  { key: 'p', text: 'Paperback', value: 'Paperback' },
  { key: 'c', text: 'Hardcover', value: 'Hardcover' },
  { key: 'k', text: 'Kindle', value: 'Kindle' }
]


class FormUser extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      title: '',
      image_url: '',
      language: '',
      format: '',
      author: '',
      formSuccessMessage: '',
      formErrorMessage: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectLanguage = this.handleSelectLanguage.bind(this);
    this.handleSelectFormat = this.handleSelectFormat.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSelectLanguage(e, data) {
    this.setState({
      language: data.value
    });
   }

   handleSelectFormat(e, data2) {
     this.setState({
         format: data2.value
      });
    }

    handleSubmit(e) {
      e.preventDefault();
      //alert(0);

      const book = {
        title: this.state.title,
        image_url: this.state.image_url,
        language: this.state.language,
        format: this.state.format,
        author: this.state.author
      }

      // Acknowledge that if the user id is provided, we're updating via PUT
      // Otherwise, we're creating a new data via post

      //console.log(book);
      axios({
        method: 'post',
        responseType: 'json',
        url: 'http://localhost:3001/api/book/',
        data: book
      }).then((response) => {
        //formSuccessMessage: response.data.msg

        this.setState({
          title: '',
          image_url: '',
          language: '',
          format: '',
          author: ''
        });

        this.props.onBookAdded(response.data.result);
      })
      .catch((err) => {
      if (err.response) {
        if (err.response.data) {
          this.setState({
            //formClassName: 'warning',
            formErrorMessage: err.response.data.msg
          });
        }
      }
      else {
          this.setState({
            //formClassName: 'warning',
            formErrorMessage: 'Something went wrong. ' + err
          });
        }
      });

    }


  render() {

    const formSuccessMessage = this.state.formSuccessMessage;
    const formErrorMessage = this.state.formErrorMessage;

    return(
      <Form className='red' onSubmit={this.handleSubmit}>
        <Form.Input
          label='Title'
          type='text'
          placeholder='Sita-Warrior of Mithila'
          name='title'
          maxLength='40'
          required
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <Form.Input
          label='Image Url'
          type='text'
          placeholder='https://rukminim1.flixcart.com/image.jpg'
          name='image_url'
          maxLength='40'
          required
          value={this.state.image_url}
          onChange={this.handleInputChange}
        />
        <Form.Group widths='equal'>
          <Form.Input
            control={Select}
            label='Language'
            name='language'
            options={languageOptions}
            placeholder='language'
            value={this.state.language}
            onChange={this.handleSelectLanguage}
          />
          <Form.Field
            control={Select}
            label='Format'
            name='format'
            options={formatOptions}
            placeholder='Format'
            value={this.state.format}
            onChange={this.handleSelectFormat}
          />
        </Form.Group>
        <Form.Input
          label='Author'
          type='text'
          placeholder='Author'
          name='author'
          maxLength='40'
          required
          value={this.state.author}
          onChange={this.handleInputChange}
        />
        <Message
          success
          color='green'
          header='Great!'
          content={formSuccessMessage}
        />
        <Message
          warning
          color='yellow'
          header='Ooops!'
          content={formErrorMessage}
        />
        <Button color={this.props.buttonColor} size={this.props.mini} floated='right'>{this.props.buttonSubmitTitle}</Button>
        <br /><br />
      </Form>
    );
  }
}

export default FormUser
