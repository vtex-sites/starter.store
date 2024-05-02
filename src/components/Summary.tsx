type Props = {
  title: string;
  style: {
    color: string;
    size: number;
  };
};

export default function Summary(props: Props) {
  return <h1 style={props.style}>{props.title}</h1>;
}
