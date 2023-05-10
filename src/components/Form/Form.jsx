import React, { Component } from 'react';
// генерация ID
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'middle',
  };

  inputNameId = nanoid();
  inputSurnameId = nanoid();

  handleChange = evt => {
    // console.log(evt.currentTarget);
    // console.log(evt.currentTarget.name);
    // console.log(evt.currentTarget.value);

    // this.setState({
    //   [evt.currentTarget.name]: evt.currentTarget.value,
    // });

    // делаем деструктуризацию
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  // handleNameChange = evt => {
  //   this.setState({ name: evt.currentTarget.value });
  // };

  // handleTagChange = evt => {
  //   this.setState({ tag: evt.currentTarget.value });
  // };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmitData(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      tag: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.inputNameId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.inputNameId}
          />
        </label>

        <label htmlFor={this.inputSurnameId}>
          Surname
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.inputSurnameId}
          />
        </label>

        <button type="submit">Send</button>

        <p>Ваш уровень:</p>

        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          Meadle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>
      </form>
    );
  }
}
