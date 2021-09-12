import { Row, Col, Input, Button, notification } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";

const links = [];

const examination = () => {
  const [links, setLinks] = useState([
    {
      class: "1A",
      link: "https://forms.gle/bDGpfKEYL4xLCamv7",
    },
    {
      class: "1B",
      link: "https://forms.gle/4qguuUAKbrYjRgPZ6",
    },
    {
      class: "1C",
      link: "https://forms.gle/uep8yUdo4rA9WWDQ8",
    },
    {
      class: "1D",
      link: "https://forms.gle/af6hgBgxK3AAj7ox7",
    },
  ]);

  const openNotificationWithIcon = (placement) => {
    notification.success({
      message: "Link Coppied",
      placement,
    });
  };

  return (
    <Row justify="center" align="middle">
      <Col span="24">
        <Row justify="center" align="middle">
          <Col span={22} sm={{ span: "10" }} md={{ span: "10" }}>
            {links.map((link) => (
              <LinkContainer
                justify="start"
                align="middle"
                style={{ marginTop: "5%" }}
              >
                <Col span={22}>Class {link.class}</Col>
                <Col span={20}>
                  <LinkHolder value={link.link} disabled />
                </Col>
                <Col span={2}>
                  <Button>
                    <FontAwesomeIcon
                      icon={faCopy}
                      onClick={() => {
                        openNotificationWithIcon("placement");
                        navigator.clipboard.writeText(link.link);
                      }}
                    />
                  </Button>
                </Col>
              </LinkContainer>
            ))}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default examination;

const LinkContainer = styled(Row)`
  margin-top: 5%;
`;

const LinkHolder = styled(Input)`
  .ant-input {
    border: none;
    /* border-bottom: 1px solid ; */
    background-color: #ffffff;
  }
`;
