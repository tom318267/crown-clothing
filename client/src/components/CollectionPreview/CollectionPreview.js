import React from "react";
import { withRouter } from "react-router-dom";
import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <div className="collection-preview">
      <h1
        style={{ cursor: "pointer" }}
        onClick={() => history.push(`${match.path}/${routeName}`)}
        className="title"
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
