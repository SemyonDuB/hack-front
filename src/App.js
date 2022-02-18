import './App.css';
import {DatePicker} from 'antd';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {Row, Col} from 'antd';
import {Layout} from 'antd';
import {Skeleton} from 'antd';
import { Typography, Divider } from 'antd';
import {Button} from "antd";

const { Title, Paragraph, Text, Link } = Typography;
const {Header, Footer, Sider, Content} = Layout;

function App() {
    return (<>
        <Layout>
            <Header><Title level={3} >Header</Title></Header>
            <Content style={{padding: '50px 50px'}}>
                <Row justify="center">
                    <h1>Имя Фамилия Отчество</h1>
                </Row>
                <Row justify="center">
                    <h3>Статус</h3>
                </Row>
                <Row justify="center">
                    <Col span={6}>
                        <Avatar size={{lg: 150}} icon={<UserOutlined/>}/>
                    </Col>
                    <Col span={6}>
                        <Skeleton/>
                    </Col>
                </Row>
                <Button href="https://google.com">Войти с гугл</Button>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    </>);
}

export default App;
