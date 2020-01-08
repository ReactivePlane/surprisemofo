import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditPerson extends Component {

  constructor(props) {
    super(props)

    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
    this.onChangePersonPassword = this.onChangePersonPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/persons/edit-person/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          password: res.data.password
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangePersonName(e) {
    this.setState({ name: e.target.value })
  }

  onChangePersonEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangePersonPassword(e) {
    this.setState({ password: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const personObject = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    axios.put('http://localhost:4000/persons/update-person/' + this.props.match.params.id, personObject)
      .then((res) => {
        console.log(res.data)
        console.log('Person successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Person List 
    this.props.history.push('/person-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangePersonName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangePersonEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" value={this.state.password} onChange={this.onChangePersonPassword} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Person
        </Button>
      </Form>
    </div>);
  }
}