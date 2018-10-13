import React, { PureComponent, createRef } from 'react';
import FilterModal from './FilterModal';
import InputWrapper from './InputWrapper';
import UIkit from 'uikit';
import {
  Countries,
  Authors,
  Years,
  Prompts,
  Colleges,
  Statuses
} from './Selects';

export default class Filter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      colleges: [],
      countries: [],
      years: [],
      statuses: [],
      authors: [],
      prompts: []
    };
    this.filterRef = createRef();
  }

  handleSelect = name => valueArray => {
    this.setState({ [name]: valueArray.map(option => option.value) });
  };

  handleSubmit = e => {
    e.preventDefault();
    UIkit.modal(this.filterRef.current).hide();
  };

  render() {
    const {
      countries,
      colleges,
      years,
      statuses,
      authors,
      prompts
    } = this.state;
    return (
      <FilterModal
        id="modal-filter"
        onProceedText="Filter"
        title="Filter by"
        ref={this.filterRef}
      >
        <form id="filter" onSubmit={this.handleSubmit}>
          <InputWrapper label="Countries">
            <Countries
              multi
              handler={this.handleSelect('countries')}
              selected={countries}
              clearable
            />
          </InputWrapper>

          <InputWrapper label="Colleges">
            <Colleges
              multi
              handler={this.handleSelect('colleges')}
              selected={colleges}
              clearable={true}
            />
          </InputWrapper>
          <InputWrapper label="Years">
            <Years
              multi
              handler={this.handleSelect('years')}
              selected={years}
              clearable={true}
            />
          </InputWrapper>

          <InputWrapper label="Authors">
            <Authors
              multi
              handler={this.handleSelect('authors')}
              selected={authors}
              clearable={true}
            />
          </InputWrapper>

          <InputWrapper label="Statuses">
            <Statuses
              multi
              handler={this.handleSelect('statuses')}
              selected={statuses}
              clearable={true}
            />
          </InputWrapper>

          <InputWrapper label="Prompts">
            <Prompts
              multi
              handler={this.handleSelect('prompts')}
              selected={prompts}
              clearable={true}
            />
          </InputWrapper>
        </form>
      </FilterModal>
    );
  }
}
