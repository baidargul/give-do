import Header from "../components/Header/Header";

type Props = {
  children: React.ReactNode
}

export default function Layout(props: Props) {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="">
        {props.children}
      </div>
    </div>
  );
}
