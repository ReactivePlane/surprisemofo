import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import PersonTableRow from './PersonTableRow';


export default class PersonList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      persons: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/persons/')
      .then(res => {
        this.setState({
          persons: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.persons.map((res, i) => {
      return <PersonTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}