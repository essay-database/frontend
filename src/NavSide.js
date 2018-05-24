import React from "react";
import { Route, Link } from "react-router-dom";
import UIkit from "uikit";
// render violation ok
import { copyright } from "./constants";
import "./styles/nav_side.css";

const LinkCustom = ({ to, exact, children, ...restProps }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => (
      <li className={match ? "uk-active" : null}>
        <Link to={to} {...restProps}>
          {children}
        </Link>
      </li>
    )}
  />
);

export default class NavSide extends React.PureComponent {
  constructor(props) {
    super(props);
    this.offCanvas = React.createRef();
  }
  handleClick = () => {
    UIkit.offcanvas(this.offCanvas.current).hide();
  };

  render() {
    return (
      <div id="offcanvas-nav" uk-offcanvas="" ref={this.offCanvas}>
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
          <button className="uk-offcanvas-close " type="button" uk-close="" />

          <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <LinkCustom to="/about" onClick={this.handleClick}>
              <span className="uk-margin-small-right" uk-icon="info" />
              About Us
            </LinkCustom>

            <LinkCustom to="/contact" onClick={this.handleClick}>
              <span className="uk-margin-small-right" uk-icon="mail" />
              Contact Us
            </LinkCustom>

            <LinkCustom to="/advertise" onClick={this.handleClick}>
              <span className="uk-margin-small-right" uk-icon="users" />
              Advertise
            </LinkCustom>

            <LinkCustom to="/terms" onClick={this.handleClick}>
              <span className="uk-margin-small-right" uk-icon="user" />
              Terms & Privacy
            </LinkCustom>

            <LinkCustom to="/help" onClick={this.handleClick}>
              <span className="uk-margin-small-right" uk-icon="question" />
              Help
            </LinkCustom>

            <li className="uk-nav-divider" />
            <li className="uk-margin-small">
              <p id="copyright">{copyright}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
