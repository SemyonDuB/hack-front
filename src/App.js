import "./App.css";
import { Layout } from "antd";
import { Header } from "./components/Header";
import { Profile } from "./pages/Profile";

const { Footer, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Content style={{ padding: "50px 50px" }}>
          <Profile />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;
