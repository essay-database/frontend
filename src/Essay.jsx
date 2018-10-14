import React from 'react';
import PropTypes from 'prop-types';
import Details from './Details';
import Image from './Image';

const Essay = ({
  paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. But football vehicles sapien, but bananas worth it. Sed tempor tincidunt arcu. Aenean Vestibulum lorem egestas enim suscipit, to the porch of now vehicles. Before the very first basketball set their jaws grief and clinical care; Japan's largest soccer tour. Duis sollicitudin cursus magna, vitae mattis sapien bibendum ac. Clinical salad but it does not drink sauce and shredded. Clinical throat to start any deductible. Nullam aliquet facilisis purus, nec feugiat urna dignissim ut. Montes nibh justo faucibus rhoncus ipsum iaculis of the living beings. Now a manufacturing itself. Proin arcu dolor, molestie sit amet rhoncus vitae, blandit sed felis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. But football vehicles sapien, but bananas worth it. Sed tempor tincidunt arcu. Aenean Vestibulum lorem egestas enim suscipit, to the porch of now vehicles. Before the very first basketball set their jaws grief and clinical care; Japan's largest soccer tour. Duis sollicitudin cursus magna, vitae mattis sapien bibendum ac. Clinical salad but it does not drink sauce and shredded. Clinical throat to start any deductible. Nullam aliquet facilisis purus, nec feugiat urna dignissim ut. Montes nibh justo faucibus rhoncus ipsum iaculis of the living beings. Now a manufacturing itself. Proin arcu dolor, molestie sit amet rhoncus vitae, blandit sed felis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. But football vehicles sapien, but bananas worth it. Sed tempor tincidunt arcu. Aenean Vestibulum lorem egestas enim suscipit, to the porch of now vehicles. Before the very first basketball set their jaws grief and clinical care; Japan's largest soccer tour. Duis sollicitudin cursus magna, vitae mattis sapien bibendum ac. Clinical salad but it does not drink sauce and shredded. Clinical throat to start any deductible. Nullam aliquet facilisis purus, nec feugiat urna dignissim ut. Montes nibh justo faucibus rhoncus ipsum iaculis of the living beings. Now a manufacturing itself. Proin arcu dolor, molestie sit amet rhoncus vitae, blandit sed felis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. But football vehicles sapien, but bananas worth it. Sed tempor tincidunt arcu. Aenean Vestibulum lorem egestas enim suscipit, to the porch of now vehicles. Before the very first basketball set their jaws grief and clinical care; Japan's largest soccer tour. Duis sollicitudin cursus magna, vitae mattis sapien bibendum ac. Clinical salad but it does not drink sauce and shredded. Clinical throat to start any deductible. Nullam aliquet facilisis purus, nec feugiat urna dignissim ut. Montes nibh justo faucibus rhoncus ipsum iaculis of the living beings. Now a manufacturing itself. Proin arcu dolor, molestie sit amet rhoncus vitae, blandit sed felis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. But football vehicles sapien, but bananas worth it. Sed tempor tincidunt arcu. Aenean Vestibulum lorem egestas enim suscipit, to the porch of now vehicles. Before the very first basketball set their jaws grief and clinical care; Japan's largest soccer tour. Duis sollicitudin cursus magna, vitae mattis sapien bibendum ac. Clinical salad but it does not drink sauce and shredded. Clinical throat to start any deductible. Nullam aliquet facilisis purus, nec feugiat urna dignissim ut. Montes nibh justo faucibus rhoncus ipsum iaculis of the living beings. Now a manufacturing itself. Proin arcu dolor, molestie sit amet rhoncus vitae, blandit sed felis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. But football vehicles sapien, but bananas worth it. Sed tempor tincidunt arcu. Aenean Vestibulum lorem egestas enim suscipit, to the porch of now vehicles. Before the very first basketball set their jaws grief and clinical care; Japan's largest soccer tour. Duis sollicitudin cursus magna, vitae mattis sapien bibendum ac. Clinical salad but it does not drink sauce and shredded. Clinical throat to start any deductible. Nullam aliquet facilisis purus, nec feugiat urna dignissim ut. Montes nibh justo faucibus rhoncus ipsum iaculis of the living beings. Now a manufacturing itself. Proin arcu dolor, molestie sit amet rhoncus vitae, blandit sed felis."
  ],
  details: {
    prompt = 'Nice long essay prompt will go here?',
    imageNo,
    name,
    country,
    dateUploaded,
    applicationStatus,
    yearApplied,
    college,
    linkBasedOnPrompt,
    linkBasedOnAuthor,
    linkBasedOnYearApplied,
    linkBasedOnCountry,
    linkBasedOnApplicationStatus,
    linkBasedOnCollege
  } = {}
}) => {
  return (
    <div className="uk-padding-small">
      <article className="uk-article">
        <h2 className="uk-heading-primary">
          <a href={linkBasedOnPrompt} className="uk-link-text">
            {prompt}
          </a>
        </h2>
        <div
          className="uk-margin uk-inline-clip uk-transition-toggle"
          tabIndex="0"
        >
          <Image
            width={1600}
            height={800}
            className="uk-transition-scale-up uk-transition-opaque"
            imageNo={imageNo}
          />
        </div>
        <Details
          name={name}
          country={country}
          dateUploaded={dateUploaded}
          applicationStatus={applicationStatus}
          yearApplied={yearApplied}
          college={college}
          linkBasedOnAuthor={linkBasedOnAuthor}
          linkBasedOnYearApplied={linkBasedOnYearApplied}
          linkBasedOnCountry={linkBasedOnCountry}
          linkBasedOnApplicationStatus={linkBasedOnApplicationStatus}
          linkBasedOnCollege={linkBasedOnCollege}
        />

        <div className="uk-text-justify">
          {paragraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className={idx === 0 ? 'uk-dropcap uk-text-lead' : null}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
};

Essay.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  details: PropTypes.shape({
    prompt: PropTypes.string.isRequired,
    imageNo: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    dateUploaded: PropTypes.object.isRequired,
    applicationStatus: PropTypes.string.isRequired,
    yearApplied: PropTypes.number.isRequired,
    college: PropTypes.string.isRequired,
    linkBasedOnPrompt: PropTypes.string.isRequired,
    linkBasedOnAuthor: PropTypes.string.isRequired,
    linkBasedOnYearApplied: PropTypes.string.isRequired,
    linkBasedOnCountry: PropTypes.string.isRequired,
    linkBasedOnApplicationStatus: PropTypes.string.isRequired,
    linkBasedOnCollege: PropTypes.string.isRequired
  }).isRequired
};
export default Essay;
