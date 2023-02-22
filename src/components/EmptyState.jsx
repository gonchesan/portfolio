import React from "react";

import "../styles/components/emptyState.scss";

const EmptyState = () => {
  return (
    <div className="empty-state">
      <img
        className="empty__image"
        loading="lazy"
        src="https://laracasts.com/images/lary-trending.svg?v=2"
        alt=""
      />
      <p className="empty__body">Please, select a project from the list.</p>
    </div>
  );
};

export default EmptyState;
