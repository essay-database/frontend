import React from "react";
import UIkit from "uikit";

import { acceptedFileTypes } from "./constants";

export default class EssayUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fileName: "", isParsing: false };
    this.progressRef = React.createRef();
  }

  static parseFile(file) {
    // set parsing true
    console.log("parsing file", file);

    // release
  }

  handleUpload = e => {
    const bar = this.progressRef.current;
    let essayFile, fileName;
    try {
      essayFile = e.target.files[0];
      fileName = essayFile.name;
      this.setState({ fileName }, EssayUpload.parseFile(essayFile));
    } catch (error) {
      console.log("upload failed");
    }

    UIkit.upload(".js-upload", {
      url: "",
      multiple: true,

      beforeSend: function() {
        console.log("beforeSend", arguments);
      },
      beforeAll: function() {
        console.log("beforeAll", arguments);
      },
      load: function() {
        console.log("load", arguments);
      },
      error: function() {
        console.log("error", arguments);
      },
      complete: function() {
        console.log("complete", arguments);
      },

      loadStart: function(e) {
        console.log("loadStart", arguments);
        bar.removeAttribute("hidden");
        bar.max = e.total;
        bar.value = e.loaded;
      },

      progress: function(e) {
        console.log("progress", arguments);
        bar.max = e.total;
        bar.value = e.loaded;
      },

      loadEnd: function(e) {
        console.log("loadEnd", arguments);
        bar.max = e.total;
        bar.value = e.loaded;
      },

      completeAll: function() {
        console.log("completeAll", arguments);
        setTimeout(function() {
          bar.setAttribute("hidden", "hidden");
        }, 1000);
        alert("Upload Completed");
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
            <input
              type="file"
              accept={acceptedFileTypes}
              value={this.state.fileName}
            />
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
