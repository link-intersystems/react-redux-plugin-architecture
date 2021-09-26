import React from "react";
import { ResourceList } from "./components/resource/ResourceList";

export const Users = (props) => {
  return (
    <ResourceList
      title="Users"
      type="users"
      properties={["id", "name", "username", "email"]}
    />
  );
};
