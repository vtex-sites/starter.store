import { getOverriddenSection } from "@faststore/core";
import Image from "next/image";
import { useMemo } from "react";

/** TODO: we should export section prop types from core to void such a spaghetti code */
interface AlertWithImageProps
  extends Omit<
    React.ComponentProps<ReturnType<typeof getOverriddenSection<"Alert">>>,
    "icon"
  > {
  src: string;
}

export default function AlertWithImage(props: AlertWithImageProps) {
  const { src, ...otherProps } = props;

  /**
   * This is an alert override that contains an Image as an Icon.
   *
   * Changes the CMS schema to add the src option and remove the icon option.
   * Overrides the Icon option and passes down the other props
   *
   * It's memoized to avoid being re-created every time the AlertWithImage component is re-rendered
   */
  const OverriddenAlert = useMemo(
    () =>
      getOverriddenSection({
        section: "Alert",
        components: {
          Icon: { Component: () => <Image src={props.src} width={24} height={24} /> },
        },
      }),
    []
  );

  return <OverriddenAlert {...otherProps} icon="noop" />;
}
