import React from "react";
import { getCurrentUser } from "@integrant-pocs/auth";

export default function Root(props) {
  return <section>{getCurrentUser().name}</section>;
  // return <section>{props.name} is mounted!</section>;
}
