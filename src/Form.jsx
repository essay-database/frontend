import React, { PureComponent, createRef } from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import FormModal from './FormModal';
import EssayUpload from './EssayUpload';

export default class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      essay: '',
      fileName: '',
      state: '',
      country: '',
      prompt: '',
      status: '',
      college: '',
      year: -1
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
      essay,
      fileName,
      state,
      country,
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
        <form
          className="uk-form-stacked"
          id="essay-form"
          onSubmit={this.handleSubmit}
        >
          <fieldset class="uk-fieldset">
            <legend class="uk-legend">Essay</legend>
            <div class="uk-margin">
              <label className="uk-form-label uk-text-capitalize">essay</label>
              <div className="uk-form-controls">
                <textarea
                  className="uk-textarea"
                  rows="5"
                  value={essay}
                  name="essay"
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

            <div class="uk-margin">
              <label className="uk-form-label uk-text-capitalize">prompt</label>
              <div className="uk-form-controls">
                <textarea
                  className="uk-textarea"
                  rows="3"
                  value={essay}
                  name="essay"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label uk-text-capitalize">
                college
              </label>
              <div className="uk-form-controls">
                <select class="uk-select" select>
                  <option>Option 01</option>
                  <option>Option 02</option>
                </select>
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label uk-text-capitalize">
                year of application
              </label>
              <div className="uk-form-controls">
                <select class="uk-select" select>
                  <option>Option 01</option>
                  <option>Option 02</option>
                </select>
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label uk-text-capitalize">
                application status
              </label>
              <div className="uk-form-controls">
                <select class="uk-select" select>
                  <option>Option 01</option>
                  <option>Option 02</option>
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset class="uk-fieldset">
            <legend class="uk-legend">Author</legend>

            <div className="uk-margin">
              <label className="uk-form-label uk-text-capitalize">name</label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  type="text"
                  autoFocus
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
                <select class="uk-select" select>
                  <option>Option 01</option>
                  <option>Option 02</option>
                </select>
              </div>
            </div>

            {country === 'United States' && (
              <div className="uk-margin">
                <label className="uk-form-label uk-text-capitalize">
                  state
                </label>
                <div className="uk-form-controls">
                  <select class="uk-select">
                    <option>Option 01</option>
                    <option>Option 02</option>
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
