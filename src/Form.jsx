import React from "react";
import UIkit from "uikit";
// no render
import FormModal from "./FormModal";
import InputWrapper from "./InputWrapper";
import { Prompts, Statuses, Countries, Years, Colleges } from "./Selects";

export default class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      country: "",
      essay: "",
      prompt: "",
      status: "",
      college: "",
      year: -1
    };
    this.progressRef = React.createRef();
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

  handleUpload = e => {
    const bar = this.progressRef.current;

    UIkit.upload(".js-upload", {
      url: "",
      multiple: true,

      beforeSend: function() {
        console.log("beforeSend", arguments);
      },
      beforeAll: function() {
        console.log("beforeAll", arguments);
      },
      load: function() {
        console.log("load", arguments);
      },
      error: function() {
        console.log("error", arguments);
      },
      complete: function() {
        console.log("complete", arguments);
      },

      loadStart: function(e) {
        console.log("loadStart", arguments);

        bar.removeAttribute("hidden");
        bar.max = e.total;
        bar.value = e.loaded;
      },

      progress: function(e) {
        console.log("progress", arguments);

        bar.max = e.total;
        bar.value = e.loaded;
      },

      loadEnd: function(e) {
        console.log("loadEnd", arguments);

        bar.max = e.total;
        bar.value = e.loaded;
      },

      completeAll: function() {
        console.log("completeAll", arguments);

        setTimeout(function() {
          bar.setAttribute("hidden", "hidden");
        }, 1000);

        alert("Upload Completed");
      }
    });
  };

  render() {
    const {
      name,
      email,
      country,
      essay,
      prompt,
      status,
      college,
      year
    } = this.state;

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
            <div
              className="js-upload uk-placeholder uk-text-center"
              onClick={this.handleUpload}
            >
              <span
                uk-icon="icon: cloud-upload"
                className="uk-margin-small-right"
              />
              <span className="uk-text-middle">Drag and Drop or </span>
              <div uk-form-custom="">
                <input type="file" multiple />
                <span className="uk-link"> Select </span>
                <span>file </span>
              </div>
            </div>
            <progress
              ref={this.progressRef}
              id="js-progressbar"
              className="uk-progress"
              value="0"
              max="100"
              hidden
            />
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
