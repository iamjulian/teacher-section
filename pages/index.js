import { Col, Row } from "antd";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Techer Section</title>
        <meta name="description" content="Teacher section" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row justify="center" align="middle">
        <Col span={24}>
          <Link href="/examination">
            <a>Examination links</a>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
