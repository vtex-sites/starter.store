import React, { FunctionComponent } from "react";
import { Price as UIPrice, PriceProps } from "@faststore/ui";

export function Price(props: PriceProps) {
  if (props.variant === "listing") {
    return <p className={"listing-price"}>📈 {props.value}</p>
  } else {
    return <p>📉 {props.value}</p>
  }
}