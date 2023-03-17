import React, { FunctionComponent } from "react";

export default function CallToAction(props: any) {
  return (
    <h1 className="big-call-to-action">
      <a href={props.link}>{props.title}</a>
    </h1>
  ) 
}