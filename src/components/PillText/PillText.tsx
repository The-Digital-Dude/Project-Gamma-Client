import "@/styles/pillText.scss";

type Props = {
  text: string;
};

export default function PillText({ text }: Props) {
  return <div className="pill__text">{text}</div>;
}
