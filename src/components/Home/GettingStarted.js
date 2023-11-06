import { Col, Row } from "antd";
import "./GettingStarted.scss";
import Getting_Started from "./../../assets/images/getting_started.jpg";

function GettingStarted() {
  const mainText = "Bored on friday evenenings? You are in the right place!";
  const subText =
    "Find events near to you, and then just join them. You may be new in the city, we was too. With Eventter, you will get used to this place easily!";
  return (
    <div className="getting-started">
      <Row gutter={[24, 16]}>
        <Col span={12}>
          <div className="getting-started__main-text">{mainText}</div>
          <div className="getting-started__sub-text">{subText}</div>
        </Col>
        <Col span={12}>
          <img
            className="getting-started__image"
            src={Getting_Started}
            alt="ai_made_image"
          />
        </Col>
      </Row>
    </div>
  );
}

export default GettingStarted;
