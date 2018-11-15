import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";
import { COPYRIGHT } from "./constants";
import "./styles/nav_side.css";

const RouteLink = ({ to, exact, children }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => (
      <li className={match ? "uk-active" : null}>
        <Link to={to}>{children}</Link>
      </li>
    )}
  />
);

RouteLink.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.func,
  children: PropTypes.node.isRequired
};

class NavSide extends PureComponent {
  constructor(props) {
    super(props);
    this.offCanvas = createRef();
  }

  handleClick = () => {
    window.UIkit.offcanvas(this.offCanvas.current).hide();
  };

  render() {
    return (
      <div id="offcanvas-nav" uk-offcanvas="" ref={this.offCanvas}>
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
          <button className="uk-offcanvas-close " type="button" uk-close="" />

          <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <RouteLink to="/about" onClick={this.handleClick}>
              <span className="uk-margin-small-right" uk-icon="info" />
              About Us
            </RouteLink>

            <RouteLink to="/contact" onClick={this.handleClick}>
              <span className="uk-margin-small-right" uk-icon="mail" />
              Contact Us
            </RouteLink>

            <RouteLink to="/advertise" onClick={this.handleClick}>
              <span className="uk-margin-small-right" />
              Advertise
            </RouteLink>

            <RouteLink to="/terms" onClick={this.handleClick}>
              <span className="uk-margin-small-right" />
              Terms
            </RouteLink>

            <RouteLink to="/privacy" onClick={this.handleClick}>
              <span className="uk-margin-small-right" />
              Privacy
            </RouteLink>

            <RouteLink to="/help" onClick={this.handleClick}>
              <span className="uk-margin-small-right" uk-icon="question" />
              Help
            </RouteLink>

            <li className="uk-nav-divider" />
            <li className="uk-margin-small">
              <p id="copyright">{COPYRIGHT}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavSide;
