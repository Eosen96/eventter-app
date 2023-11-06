import { Flex } from "antd";
import "./Header.scss";
import Eventter_logo from "../assets/logos/Eventter_Logo.svg";
import JoinUsButton from "../components/layout/JoinUsButton";

function Header() {
  return (
    <Flex className="header" align={"center"} justify="space-between">
      <img src={Eventter_logo} alt="from app.logo" className="header__logo" />
      <JoinUsButton />
    </Flex>
  );
}

export default Header;
