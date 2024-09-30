import { Layout, Typography } from 'antd';
import UserList from './components/userList';



function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header style={{ color: 'white', textAlign: 'center', fontSize: '24px' }}>
        <Typography.Title level={3} style={{ color: 'white', margin: 0 }}>
          User List
        </Typography.Title>
      </Header>

      <Content style={{ padding: '20px 50px', minHeight: '80vh' }}>
        <UserList />
      </Content>

      <Footer style={{ textAlign: 'center' }}>©2024 Created by Olha</Footer>
    </Layout>
  );
}

export default App;
