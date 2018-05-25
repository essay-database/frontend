import React from "react";
import SelectVirtualized from "react-virtualized-select";
import "react-select/dist/react-select.css";
import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";

import {
  searchCollegeOptions,
  yearsOptions,
  countriesOptions,
  promptsOptions,
  statusesOptions,
  authorsOptions
} from "./constants";
import "./styles/selects.css";

const smallWidthBoundary = 640;

export const SelectWrapper = ({
  options = [{ value: 1, label: "One" }, { value: 2, label: "Two" }],
  name,
  required = false,
  placeholder,
  optionHeight,
  handler,
  selected,
  loadOptions,
  asyncBool = false,
  multi = false,
  clearable = false
}) => (
  <SelectVirtualized
    name={name}
    required={required}
    placeholder={placeholder}
    value={selected}
    clearable={clearable}
    optionHeight={optionHeight}
    onChange={handler}
    options={asyncBool ? [] : options}
    async={asyncBool}
    loadOptions={loadOptions}
    autoload={asyncBool}
    multi={multi}
  />
);

export class Prompts extends React.PureComponent {
  state = {
    optionHeight: null
  };

  handleResize = () => {
    this.setState(prevState => {
      let { optionHeight } = prevState;
      if (window.innerWidth < smallWidthBoundary) optionHeight = 180;
      else optionHeight = 100;
      return {
        optionHeight
      };
    });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const { handler, selected, multi, clearable, placeholder } = this.props;
    return (
      <SelectWrapper
        name="prompt"
        placeholder={placeholder}
        optionHeight={this.state.optionHeight}
        options={promptsOptions}
        selected={selected}
        handler={handler}
        multi={multi}
        clearable={clearable}
      />
    );
  }
}

export const Countries = ({
  handler,
  selected,
  multi,
  clearable,
  placeholder
}) => (
  <SelectWrapper
    name="country"
    handler={handler}
    placeholder={placeholder}
    options={countriesOptions}
    selected={selected}
    multi={multi}
    clearable={clearable}
  />
);

export const Years = ({ handler, selected, multi, clearable, placeholder }) => (
  <SelectWrapper
    name="year"
    placeholder={placeholder}
    options={yearsOptions}
    selected={selected}
    handler={handler}
    multi={multi}
    clearable={clearable}
  />
);

export const Statuses = ({
  selected,
  handler,
  multi,
  clearable,
  placeholder
}) => (
  <SelectWrapper
    name="statuses"
    placeholder={placeholder}
    options={statusesOptions}
    selected={selected}
    handler={handler}
    multi={multi}
    clearable={clearable}
  />
);

export const Authors = ({
  selected,
  handler,
  multi,
  clearable,
  placeholder
}) => (
  <SelectWrapper
    name="author"
    placeholder={placeholder}
    options={authorsOptions}
    selected={selected}
    handler={handler}
    multi={multi}
    clearable={clearable}
  />
);

export const Colleges = ({
  handler,
  selected,
  multi,
  clearable,
  placeholder
}) => (
  <SelectWrapper
    name="college"
    asyncBool
    placeholder={placeholder}
    selected={selected}
    handler={handler}
    loadOptions={searchCollegeOptions}
    multi={multi}
    clearable={clearable}
  />
);

// for Testing only
export default () => (
  <div>
    <Countries />
    <Colleges />
    <Years />
    <Prompts />
    <Statuses />
    <Authors />
  </div>
);
