import React from 'react';
import faker from 'faker';

const Comments = () => {
  return (
    <ul className="uk-comment-list">
      <li>
        <article className="uk-comment uk-visible-toggle">
          <header className="uk-comment-header uk-position-relative">
            <div className="uk-grid-medium uk-flex-middle" uk-grid="">
              <div className="uk-width-auto">
                <img
                  className="uk-comment-avatar uk-border-circle"
                  src={faker.image.avatar()}
                  width="80"
                  height="80"
                  alt=""
                />
              </div>
              <div className="uk-width-expand">
                <h4 className="uk-comment-title uk-margin-remove">
                  <a className="uk-link-reset">Author</a>
                </h4>
                <p className="uk-comment-meta uk-margin-remove-top">
                  <a className="uk-link-reset">12 days ago</a>
                </p>
              </div>
            </div>
            <div className="uk-position-top-right uk-position-small uk-hidden-hover">
              <a className="uk-link-muted">Reply</a>
            </div>
          </header>
          <div className="uk-comment-body">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </article>
        <ul>
          <li>
            <article className="uk-comment uk-comment-primary uk-visible-toggle">
              <header className="uk-comment-header uk-position-relative">
                <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                  <div className="uk-width-auto">
                    <img
                      className="uk-comment-avatar uk-border-circle"
                      src={faker.image.avatar()}
                      width="80"
                      height="80"
                      alt=""
                    />
                  </div>
                  <div className="uk-width-expand">
                    <h4 className="uk-comment-title uk-margin-remove">
                      <a className="uk-link-reset">Author</a>
                    </h4>
                    <p className="uk-comment-meta uk-margin-remove-top">
                      <a className="uk-link-reset">12 days ago</a>
                    </p>
                  </div>
                </div>
                <div className="uk-position-top-right uk-position-small uk-hidden-hover">
                  <a className="uk-link-muted">Reply</a>
                </div>
              </header>
              <div className="uk-comment-body">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className="uk-comment uk-visible-toggle">
              <header className="uk-comment-header uk-position-relative">
                <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                  <div className="uk-width-auto">
                    <img
                      className="uk-comment-avatar uk-border-circle"
                      src={faker.image.avatar()}
                      width="80"
                      height="80"
                      alt=""
                    />
                  </div>
                  <div className="uk-width-expand">
                    <h4 className="uk-comment-title uk-margin-remove">
                      <a className="uk-link-reset">Author</a>
                    </h4>
                    <p className="uk-comment-meta uk-margin-remove-top">
                      <a className="uk-link-reset">12 days ago</a>
                    </p>
                  </div>
                </div>
                <div className="uk-position-top-right uk-position-small uk-hidden-hover">
                  <a className="uk-link-muted">Reply</a>
                </div>
              </header>
              <div className="uk-comment-body">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </article>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Comments;
