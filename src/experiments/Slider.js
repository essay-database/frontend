import React from "react";

export default () => (
  <div uk-slider="center: true; autoplay: true">
    <div class="uk-position-relative uk-visible-toggle uk-light">
      <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
        {[...Array(4).keys()].map(i => (
          <li key={i}>
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img src="https://picsum.photos/600/400/?random" alt="" />
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Headline</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <a
        class="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous=""
        uk-slider-item="previous"
      />
      <a
        class="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next=""
        uk-slider-item="next"
      />
    </div>

    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
  </div>
);
