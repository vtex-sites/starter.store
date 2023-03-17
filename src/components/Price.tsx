import React, { FunctionComponent } from "react";
import { Price as UIPrice, PriceProps } from "@faststore/ui";

export function Price(props: PriceProps) {
  return <UIPrice {...props} value={0.0} />
}