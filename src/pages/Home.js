import GettingStarted from "../components/Home/GettingStarted";
import Header from "../layout/Header";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Header />
      <GettingStarted />
    </div>
  );
}

export default Home;
