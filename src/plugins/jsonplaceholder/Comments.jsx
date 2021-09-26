import React from "react";
import { ResourceList } from "./components/resource/ResourceList";

export const Comments = (props) => {
  return (
    <ResourceList
      title="Users"
      type="users"
      properties={["id", "name", "email", "body"]}
    />
  );
};
