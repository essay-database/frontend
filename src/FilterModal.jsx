import React from "react";

const FilterModal = ({ id, title, children, onProceedText, forwardRef }) => (
  <div
    id={id}
    ref={forwardRef}
    className="uk-flex-top uk-modal-container"
    uk-modal=""
    uk-overflow-auto=""
  >
    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <button className="uk-modal-close-default" type="button" uk-close="" />
      <div className="uk-modal-header uk-padding-small">
        <h2 className="uk-heading-primary">{title}</h2>
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
          value={onProceedText || "submit"}
          form="filter"
        />
      </div>
    </div>
  </div>
);

export default React.forwardRef((props, ref) => {
  return <FilterModal forwardRef={ref} {...props} />;
});
