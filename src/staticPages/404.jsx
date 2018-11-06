import React from "react";
import Center from "./Center";

export default ({ message = "" }) => {
  return (
    <Center>
      <div className="uk-text-center">
        <h1>
          <b>Error 404:</b> Page not found.
        </h1>
        <p>{message}</p>
        <a className="uk-button uk-button-primary" href="/">
          Back to Home
        </a>
      </div>
    </Center>
  );
};
