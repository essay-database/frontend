import React from "react";
import { UPLOAD_IMAGE, UPLOAD_TITLE } from "./constants";

const Form = () => (
  <div className="uk-modal-full modal-form" uk-modal="">
    <div className="uk-modal-dialog">
      <button
        className="uk-modal-close-full uk-close-large"
        type="button"
        uk-close=""
      />
      <div className="uk-grid-collapse uk-child-width-1-2@m" uk-grid="">
        <div>
          {/* <div className="uk-modal-header">
            <h1 className="uk-text-center">{UPLOAD_TITLE}</h1>
          </div> */}
          <iframe
            title="submit your essay"
            uk-responsive=""
            width={
              window.innerWidth > 960
                ? window.innerWidth / 2
                : window.innerWidth
            }
            height={window.innerHeight}
            src="https://docs.google.com/forms/d/e/1FAIpQLSd2KZfeAHiZ_UcxLtzs-3gwzP0mXPN_4HCTQKZ6aiB5764BOg/viewform?embedded=true"
          >
            Loading...
          </iframe>
        </div>

        <div className="uk-inline uk-flex-first">
          <div
            className="uk-background-cover uk-visible@m"
            data-src={UPLOAD_IMAGE}
            uk-img=""
            uk-height-viewport=""
          />
          <div className="uk-overlay uk-overlay-default uk-position-cover" />
        </div>
      </div>
    </div>
  </div>
);

export default Form;
