import AppHeader from "./components/AppHeader";
import Navbar from "./components/Navbar";
import { Layout } from '@douyinfe/semi-ui';
import AppContent from "./components/AppContent";

const App = () => {
  const { Header, Sider, Content } = Layout;

  return (
    <Layout>
      <Header>
        <AppHeader />
      </Header>

      <Layout>
        <Sider>
          <Navbar />
        </Sider>
        <Content>
          <AppContent />
        </Content>
      </Layout>
    </Layout>
  );
}
export default App