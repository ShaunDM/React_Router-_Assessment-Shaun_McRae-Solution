import React from "react";
import {useRouteMatch} from "react-router-dom"
/*
  TODO: Change the below to be a link that goes to the specific post route using the post id.
*/

export const PostLink = ({ post }) => {
  const {url} = useRouteMatch();
  return (
    <li className="list-group-item text-truncate">
      <a href={`${url}/${post.id}`}>{post.title}</a>
    </li>
  );
};

export default PostLink;
