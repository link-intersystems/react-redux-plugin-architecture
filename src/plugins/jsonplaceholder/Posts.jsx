import React from "react";
import { ResourceList } from "./components/resource/ResourceList";

export const Posts = (props) => {
  return (
    <ResourceList
      title="Posts"
      type="posts"
      properties={["id", "userId", "title", "body"]}
    />
  );
};
