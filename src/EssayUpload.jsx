import React from 'react';
import UIkit from 'uikit';

import { acceptedFileTypes } from './constants';
const uploadURL = 'http://localhost:4000/upload';

export default class EssayUpload extends React.Component {
  constructor(props) {
    super(props);
    this.progressRef = React.createRef();
  }

  handleUpload = e => {
    const bar = this.progressRef.current;

    UIkit.upload('.js-upload', {
      url: uploadURL,
      multiple: false,

      beforeSend: function() {
        console.log('beforeSend', arguments);
      },
      beforeAll: function() {
        const file = arguments[1][0];
        console.log('beforeAll', file);
      },
      load: function() {
        console.log('load', arguments);
      },
      error: function() {
        console.log('error', arguments);
      },
      complete: function() {
        console.log('complete', arguments);
      },
      // progress bar
      loadStart: function(e) {
        bar.removeAttribute('hidden');
        bar.max = e.total;
        bar.value = e.loaded;
      },

      progress: function(e) {
        bar.max = e.total;
        bar.value = e.loaded;
      },

      loadEnd: function(e) {
        bar.max = e.total;
        bar.value = e.loaded;
      },

      completeAll: function() {
        console.log('completeAll', arguments);
        setTimeout(function() {
          bar.setAttribute('hidden', 'hidden');
        }, 1000);
        // alert("Upload Completed");
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="js-upload uk-placeholder uk-text-center"
          onClick={this.handleUpload}
        >
          <span
            uk-icon="icon: cloud-upload"
            className="uk-margin-small-right"
          />
          <span className="uk-text-middle">Drag and Drop or </span>
          <div uk-form-custom="">
            <input type="file" accept={acceptedFileTypes} />
            <span className="uk-link"> Select </span>
            <span>file </span>
          </div>
        </div>
        <progress
          ref={this.progressRef}
          id="js-progressbar"
          className="uk-progress"
          value="0"
          max="100"
          hidden
        />
      </React.Fragment>
    );
  }
}
