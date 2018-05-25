import React from "react";

const setHeight = height => ({ height });

export default () => (
  <div
    className="uk-child-width-1-2@s uk-child-width-1-3@m"
    uk-grid="masonry: true"
  >
    <div>
      <div
        className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
        style={setHeight(100)}
      >
        Item
      </div>
    </div>
    <div>
      <div
        className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
        style={setHeight(230)}
      >
        Item
      </div>
    </div>
    <div>
      <div
        className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
        style={setHeight(150)}
      >
        Item
      </div>
    </div>
    <div>
      <div
        className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
        style={setHeight(160)}
      >
        Item
      </div>
    </div>
    <div>
      <div
        className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
        style={setHeight(120)}
      >
        Item
      </div>
    </div>
    <div>
      <div
        className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
        style={setHeight(140)}
      >
        Item
      </div>
    </div>
    <div>
      <div
        className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
        style={setHeight(200)}
      >
        Item
      </div>
    </div>
    <div>
      <div
        className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
        style={setHeight(180)}
      >
        Item
      </div>
    </div>
    <div>
      <div
        className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
        style={setHeight(140)}
      >
        Item
      </div>
    </div>
  </div>
);
