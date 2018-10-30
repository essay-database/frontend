import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { UPLOAD_IMAGE } from "./constants";

const FormModal = ({ title, children, forwardRef }) => (
  <div ref={forwardRef} className="uk-modal-full modal-form" uk-modal="">
    <div className="uk-modal-dialog">
      <button
        className="uk-modal-close-full uk-close-large"
        type="button"
        uk-close=""
      />
      <div className="uk-modal-header">
        <h1 className="uk-text-center">{title}</h1>
      </div>
      <div
        className="uk-grid-collapse uk-flex-middle uk-child-width-1-2@m"
        uk-grid=""
      >
        <div>
          <div className="uk-modal-body">{children}</div>
          <div className="uk-modal-footer uk-text-right">
            <button
              className="uk-button uk-button-default uk-modal-close"
              type="button"
            >
              Cancel
            </button>
            <input
              className="uk-button uk-button-primary uk-margin-small-left"
              type="submit"
              name="submit"
              value="submit"
              form="essay-form"
            />
          </div>
        </div>

        <div className="uk-inline uk-flex-first">
          <div
            className="uk-background-cover uk-visible@m"
            uk-height-viewport=""
            data-src={UPLOAD_IMAGE}
            uk-img=""
          />
          <div className="uk-overlay uk-overlay-default uk-position-cover" />
        </div>
      </div>
    </div>
  </div>
);

FormModal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  forwardRef: PropTypes.object.isRequired
};

export default forwardRef((props, ref) => {
  return <FormModal forwardRef={ref} {...props} />;
});
