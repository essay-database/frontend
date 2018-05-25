import React from "react";

import "./styles/icon.css";

export default function({
  link,
  handler,
  iconClass = "fas fa-eye",
  id,
  blankTarget,
  iconSize,
  countAbove,
  countRight,
  isHorizontal
}) {
  let direction = "";
  if (!isHorizontal) {
    direction = "uk-flex-column";
  }
  return (
    <div
      className={`uk-flex uk-flex-middle ${direction} ${
        isHorizontal ? "uk-margin-small-right" : ""
      }`}
    >
      <div>
        <p className="uk-margin-remove-bottom">
          <a
            href={link}
            onClick={handler}
            target={blankTarget ? "_blank" : null}
          >
            <i
              id={id}
              className={iconClass}
              style={{
                fontSize: `${iconSize}rem`
              }}
            />{" "}
          </a>{" "}
        </p>{" "}
      </div>
      <div>
        <p
          className={`uk-margin-remove-bottom ${
            isHorizontal && countRight >= 0 ? "uk-margin-small-left" : ""
          }`}
        >
          {countRight}{" "}
        </p>{" "}
      </div>
      <div className="uk-flex-first">
        <p className="uk-margin-remove-bottom"> {countAbove} </p>{" "}
      </div>{" "}
    </div>
  );
}
