import React, { useState, useEffect, useRef } from 'react';

const MovieCardDescription = ({ description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const isTextOverflowed = descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
      setShowFullDescription(!isTextOverflowed);
    }
  }, [description]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div>
      <span ref={descriptionRef} className={`moviecard__description ${showFullDescription ? 'full' : ''}`}>
        {description}
      </span>
      {showFullDescription && (
        <span className="show-more-link" onClick={toggleDescription} >скрыть</span>
      )}
      {!showFullDescription && (
        <span className="show-more-link" onClick={toggleDescription} >paскрыть</span>
      )}
    </div>
  );
};

export default MovieCardDescription;
