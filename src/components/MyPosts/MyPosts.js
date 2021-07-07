import React from "react";
import Posts from "../Posts/Posts"
import {Link} from "react-router-dom";

function MyPosts(props)  {
  return <>
    <div className="text-right">
      <Link
        className="btn btn-outline-primary"
        role="button"
        to={`/posts/new`}
      >
        Добавить
      </Link>
    </div>
    <Posts posts={props.posts}/>
  </>
}


export default MyPosts