import React, { PureComponent, createRef } from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import FormModal from './FormModal';
import EssayUpload from './EssayUpload';
import {
  COLLEGES,
  NUM_YEARS_BACK,
  STATUSES,
  COUNTRIES,
  STATES
} from './constants';

function getYears(NUM_YEARS_BACK) {
  let year = new Date().getFullYear();
  const result = [];
  for (let i = year; i < NUM_YEARS_BACK; i--) {
    result.push(year);
    year -= 1;
  }
  return result;
}

const YEARS = getYears(NUM_YEARS_BACK);

export default class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      essayText: '',
      state: '',
      country: '',
      prompt: '',
      applicationStatus: '',
      college: '',
      yearApplied: -1
    };
    this.formRef = createRef();
  }

  submit() {}

  handleUpload(file) {}

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.isUploadComplete) {
      this.submit();
      UIkit.modal(this.formRef.current).hide();
    }
  };

  handleSelect = name => ({ _, value }) => {
    this.setState({ [name]: value });
  };

  handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value
    });
  };

  handleAnonymous = e => {
    this.setState(prevState => {
      const isAnonymous = !prevState.isAnonymous;
      let name = prevState.name;
      if (isAnonymous) {
        name = '';
      }
      return {
        name,
        isAnonymous
      };
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
      <FormModal
        modalClass="modal-form"
        title="Share with the world!"
        ref={this.formRef}
      >
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
                  rows="5"
                  value={essayText}
                  name="essayText"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label uk-text-capitalize">upload</label>
              <div className="uk-form-controls">
                <EssayUpload handleUpload={this.handleUpload} />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label uk-text-capitalize">prompt</label>
              <div className="uk-form-controls">
                <textarea
                  className="uk-textarea"
                  rows="3"
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
                  className="uk-select"
                  value={college}
                  onChange={this.handleChange}
                  name="college"
                >
                  {COLLEGES.map((college, idx) => (
                    <option key={idx}>{college}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label uk-text-capitalize">
                year of application
              </label>
              <div className="uk-form-controls">
                <select
                  className="uk-select"
                  value={yearApplied}
                  onChange={this.handleChange}
                  name="yearApplied"
                >
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
                  className="uk-select"
                  value={applicationStatus}
                  onChange={this.handleChange}
                  name="applicationStatus"
                >
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
              <label className="uk-form-label uk-text-capitalize">name</label>
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
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label uk-text-capitalize">
                country
              </label>
              <div className="uk-form-controls">
                <select className="uk-select" value={country} name="country">
                  {COUNTRIES.map((country, idx) => (
                    <option key={idx}>{country}</option>
                  ))}
                </select>
              </div>
            </div>

            {country === 'United States' && (
              <div className="uk-margin">
                <label className="uk-form-label uk-text-capitalize">
                  state
                </label>
                <div className="uk-form-controls">
                  <select className="uk-select" value={state} name="state">
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
