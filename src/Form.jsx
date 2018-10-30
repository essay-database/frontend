import React, { PureComponent, createRef } from "react";
import FormModal from "./FormModal";
import { COLLEGES, YEARS, STATUSES, COUNTRIES, STATES } from "./constants";

const PROMPT_ROWS = 3;
const ESSAY_ROWS = PROMPT_ROWS * 4;

export default class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      essayText: "",
      state: "",
      country: "",
      prompt: "",
      applicationStatus: "",
      college: "",
      yearApplied: ""
    };
    this.formRef = createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    window.UIkit.modal(this.formRef.current).hide();
  };

  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [target.name]: value
    });
  };

  render() {
    const {
      name,
      email,
      essayText,
      state,
      country,
      prompt,
      applicationStatus,
      college,
      yearApplied
    } = this.state;
    return (
      <FormModal title="Share with the world!" ref={this.formRef}>
        <form
          className="uk-form-stacked"
          id="essay-form"
          onSubmit={this.handleSubmit}
        >
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Essay</legend>
            <div className="uk-margin">
              <label className="uk-form-label uk-text-capitalize">essay</label>
              <div className="uk-form-controls">
                <textarea
                  className="uk-textarea"
                  rows={ESSAY_ROWS}
                  value={essayText}
                  name="essayText"
                  onChange={this.handleChange}
                  required
                  autofocus="true"
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label uk-text-capitalize">prompt</label>
              <div className="uk-form-controls">
                <textarea
                  className="uk-textarea"
                  required
                  rows={PROMPT_ROWS}
                  value={prompt}
                  name="prompt"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label uk-text-capitalize">
                college
              </label>
              <div className="uk-form-controls">
                <select
                  required
                  className="uk-select"
                  value={college}
                  onChange={this.handleChange}
                  name="college"
                >
                  <option value="outside">Outside the US</option>
                  <option disabled hidden value="" />
                  {COLLEGES.map((college, idx) => (
                    <option key={idx}>{college}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label">Year of Application</label>
              <div className="uk-form-controls">
                <select
                  className="uk-select"
                  value={yearApplied}
                  onChange={this.handleChange}
                  name="yearApplied"
                  required
                >
                  <option disabled hidden value="" />
                  {YEARS.map((year, idx) => (
                    <option key={idx}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label uk-text-capitalize">
                application status
              </label>
              <div className="uk-form-controls">
                <select
                  className="uk-select uk-text-capitalize"
                  value={applicationStatus}
                  onChange={this.handleChange}
                  name="applicationStatus"
                  required
                >
                  <option disabled hidden value="" />
                  {STATUSES.map((status, idx) => (
                    <option key={idx}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Author</legend>

            <div className="uk-margin">
              <label className="uk-form-label uk-text-capitalize">
                name
                <small className="uk-text-muted"> (not required)</small>
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  type="text"
                  value={name}
                  onChange={this.handleChange}
                  name="name"
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label uk-text-capitalize">email</label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  type="text"
                  value={email}
                  onChange={this.handleChange}
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label uk-text-capitalize">
                country
              </label>
              <div className="uk-form-controls">
                <select
                  className="uk-select"
                  value={country}
                  name="country"
                  onChange={this.handleChange}
                  required
                >
                  <option disabled hidden value="" />
                  {COUNTRIES.map((country, idx) => (
                    <option key={idx}>{country}</option>
                  ))}
                </select>
              </div>
            </div>

            {country === "United States" && (
              <div className="uk-margin">
                <label className="uk-form-label uk-text-capitalize">
                  state
                </label>
                <div className="uk-form-controls">
                  <select
                    className="uk-select"
                    value={state}
                    name="state"
                    required
                    onChange={this.handleChange}
                  >
                    <option disabled hidden value="" />
                    {STATES.map((state, idx) => (
                      <option key={idx}>{state}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </fieldset>
        </form>
      </FormModal>
    );
  }
}
