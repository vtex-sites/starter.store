import { usePLP } from "@faststore/core";

export interface CallToActionProps {
  title: string;
  link: {
    text: string;
    url: string;
  };
}

export default function CallToAction(props: CallToActionProps) {
  const context = usePLP();
  console.log("🚀 ~ context:", context);
  return (
    <section>
      <h2>{`${props.title} ${context?.data?.namedExtraData?.data}`}</h2>
    </section>
  );
}
