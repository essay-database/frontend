import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const IMAGE_PATH = './images/form_upload.png';

const FormModal = ({ modalClass, title, children, forwardRef }) => (
  <div ref={forwardRef} className={`uk-modal-full ${modalClass}`} uk-modal="">
    <div className="uk-modal-dialog" uk-height-viewport="">
      <button
        className="uk-modal-close-full uk-close-large"
        type="button"
        uk-close=""
      />
      <div
        className="uk-grid-collapse uk-child-width-1-1 uk-child-width-1-2@m uk-flex-middle"
        uk-grid=""
      >
        <div className="uk-inline uk-visible@m">
          <div
            className="uk-background-cover"
            style={{ backgroundImage: `url(${IMAGE_PATH})` }}
            uk-height-viewport=""
            uk-img=""
          />
          <div className="uk-overlay-default uk-position-cover" />
        </div>

        <div>
          <div className="uk-modal-header uk-padding-small">
            <h2 className="uk-heading-primary uk-text-center">{title}</h2>
          </div>

          <div className="uk-modal-body uk-padding-small">{children}</div>
          <div className="uk-modal-footer uk-padding-small uk-text-right">
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
      </div>
    </div>
  </div>
);

FormModal.propTypes = {
  modalClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  forwardRef: PropTypes.object.isRequired
};

export default forwardRef((props, ref) => {
  return <FormModal forwardRef={ref} {...props} />;
});
