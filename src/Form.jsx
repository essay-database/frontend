import React from "react";
import UIkit from "uikit";
// no render
import FormModal from "./FormModal";
import EssayUpload from "./EssayUpload";
import InputWrapper from "./InputWrapper";
import { Prompts, Statuses, Countries, Years, Colleges } from "./Selects";

export default class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      country: "",
      prompt: "",
      status: "",
      college: "",
      year: -1
    };
    this.formRef = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    UIkit.modal(this.formRef.current).hide();
    console.log(this.state);
  };

  handleSelect = name => ({ _, value }) => {
    this.setState({ [name]: value });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, country, prompt, status, college, year } = this.state;

    return (
      <FormModal
        modalClass="modal-form"
        title="Share with the world!"
        ref={this.formRef}
      >
        <form id="essay-form" onSubmit={this.handleSubmit}>
          <InputWrapper label="Name">
            <input
              className="uk-input"
              type="text"
              required
              autoFocus
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              name="name"
            />
          </InputWrapper>

          <InputWrapper label="Email">
            <input
              className="uk-input"
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              name="email"
            />
          </InputWrapper>

          <InputWrapper label="Country">
            <Countries
              handler={this.handleSelect("country")}
              selected={country}
            />
          </InputWrapper>

          <InputWrapper label="Upload Essay">
            <EssayUpload />
          </InputWrapper>

          <InputWrapper label="Prompt">
            <Prompts handler={this.handleSelect("prompt")} selected={prompt} />
          </InputWrapper>

          <InputWrapper label="Application Status">
            <Statuses handler={this.handleSelect("status")} selected={status} />
          </InputWrapper>

          <InputWrapper label="College submitted">
            <Colleges
              handler={this.handleSelect("college")}
              selected={college}
            />
          </InputWrapper>

          <InputWrapper label="Year submitted">
            <Years handler={this.handleSelect("year")} selected={year} />
          </InputWrapper>
        </form>
      </FormModal>
    );
  }
}
