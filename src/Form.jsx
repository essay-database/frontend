import React from "react";
import { UPLOAD_IMAGE } from "./constants";

const Form = () => (
  <div className="uk-modal-full modal-form" uk-modal="">
    <div className="uk-modal-dialog">
      <button
        className="uk-modal-close-full uk-close-large"
        type="button"
        uk-close=""
      />
      <div className="uk-modal-header">
        <h1 className="uk-text-center">Share with the world!</h1>
      </div>
      <div
        className="uk-grid-collapse uk-flex-middle uk-child-width-1-2@m"
        uk-grid=""
      >
        <div>
          <div className="uk-modal-body">
            <iframe
              title="submit your essay"
              uk-responsive=""
              width="640"
              height="845"
              src="https://docs.google.com/forms/d/e/1FAIpQLSd2KZfeAHiZ_UcxLtzs-3gwzP0mXPN_4HCTQKZ6aiB5764BOg/viewform?embedded=true"
            >
              Loading...
            </iframe>
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

export default Form;
