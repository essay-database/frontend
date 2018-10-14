import React from 'react';
import PropTypes from 'prop-types';
import ClampLines from 'react-clamp-lines';
import essays from './data/essays';
import { ESSAYS_SHAPE } from './constants';
const debounceBy = 100;
const numLines = 2;

const ListArticles = ({ list }) => (
  <div>
    {list.map((essay, idx) => (
      <div key={essay.id}>
        <div className="uk-flex">
          <div className="uk-margin-small-right uk-visible@l">
            <p className="uk-text-large uk-text-muted">{idx + 1}</p>
          </div>
          <div className="uk-text-small uk-margin-small-bottom">
            <a href={`/essays/${essay.id}`} className="uk-link-text">
              <ClampLines
                text={essay.paragraphs.join(' ')}
                lines={numLines}
                buttons={false}
                debounce={debounceBy}
              />
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

ListArticles.propTypes = {
  list: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired
};

const DEFAULT_ARTICLES = essays.slice(0, 3);

const Sidebar = ({
  relatedArticles = DEFAULT_ARTICLES,
  mostCommentedArticles = DEFAULT_ARTICLES,
  mostViewedArticles = DEFAULT_ARTICLES
}) => (
  <div className="uk-margin-top uk-margin-bottom">
    <div className="uk-margin">
      <h3 className="uk-heading-divider">Related</h3>
      <ListArticles list={relatedArticles} />
    </div>
    <div className="uk-margin">
      <h3 className="uk-heading-divider">Most Views</h3>
      <ListArticles list={mostViewedArticles} />
    </div>

    <div className="uk-margin">
      <h3 className="uk-heading-divider">Most Comments</h3>
      <ListArticles list={mostCommentedArticles} />
    </div>
  </div>
);

Sidebar.propTypes = {
  relatedArticles: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired,
  mostCommentedArticles: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired,
  mostViewedArticles: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired
};

export default Sidebar;
