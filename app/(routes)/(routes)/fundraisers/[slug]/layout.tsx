import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";

type Props = {
  children: React.ReactNode
}

export default function Layout(props: Props) {
  return (
    <div>
      <div className="">
        {props.children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
