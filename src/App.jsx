import AppHeader from "./components/AppHeader";
import Navbar from "./components/Navbar";
import { Layout } from '@douyinfe/semi-ui';
import AppContent from "./components/AppContent";

// 引入路由表
// import AppRouter from "@/router";
import {BrowserRouter} from 'react-router-dom';
// 引入实现路由鉴权的高阶组件
import AuthRoute from "./components/Auth/AuthRoute";


import { BrowserRouter as Router, Route, NavLink ,Routes} from 'react-router-dom'
import One from './page/one';
import Two from './page/two';

const App = () => {
  const { Header, Sider, Content } = Layout;

  return (
    <BrowserRouter><AuthRoute>
      
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
          <NavLink to="/one" style={{marginRight: '20px'}}>菜单一</NavLink>
          <NavLink to="/two">菜单二</NavLink>
          <Routes>
            <Route path="/one" element={<One/>} />
            <Route path="/two" element={<Two/>} />
          </Routes>
          
        </Content>
      </Layout>
    </Layout>

    </AuthRoute></BrowserRouter>
  );
}
export default App