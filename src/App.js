import "./App.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { Layout } from "antd";
import { Skeleton } from "antd";
import { Button } from "antd";
import { Header } from "./components/Header";

const { Footer, Sider, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Content style={{ padding: "50px 50px" }}>
          
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;
