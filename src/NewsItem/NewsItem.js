import React from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as outLineFaThumbsUp, faEyeSlash} from '@fortawesome/free-regular-svg-icons'
import './NewsItem.css';


const NewsItem = ({item}) => {
  return(
  <div data-testId={`NewsItem-${item.objectID}`} 
          className= {"d-flex flex-row text-center my-2 justify-content-between px-16"} 
          tabIndex="0" 
          aria-label="News Item" >
      <FontAwesomeIcon icon={faEyeSlash} data-tooltip="hide" data-testid={'outline-upvote-icon'}/>
      <div className="d-flex flex-row">
        <h6 className="mr-md-2"tabIndex={0}>{item.title} </h6>
        <label className={"NewsItem-author text-sm-left my-0"} tabIndex="0">By: {item.author}</label>
      </div>
      <div className="d-flex flex-column" tabIndex="0" aria-labeL={`upvote count:${item.points}`} role="button">
        <FontAwesomeIcon icon={outLineFaThumbsUp} data-testid={'outline-upvote-icon'}/>
        <label id="UpvoteCount" className="NewsItem-Upvotes m-0">{item.points}</label>
      </div>
  </div>
  );
}

const NewsItemShape = {
  created_at: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
  points: PropTypes.number,
  story_text: PropTypes.string,
  comment_text: PropTypes.string,
  num_comments: PropTypes.number,
  _tags: PropTypes.arrayOf(PropTypes.string),
  objectID: PropTypes.arrayOf(PropTypes.string)
}

NewsItem.propTypes = {
  item: PropTypes.shape(NewsItemShape)
}

export default NewsItem;