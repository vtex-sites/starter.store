import { useDynamicContent } from "@faststore/core";
import { ServerDynamicContentQuery } from "@faststore/core/api";

export interface CallToActionProps {
  title: string;
  link: {
    text: string;
    url: string;
  };
}

export default function CallToAction(props: CallToActionProps) {
  const context = useDynamicContent<ServerDynamicContentQuery>();
  console.log("🚀 ~ CallToAction context:", context);
  return (
    <section>
      <h2>{`${props.title} ${context?.data?.namedExtraData?.data}`}</h2>
    </section>
  );
}
