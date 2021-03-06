// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from '@arco-design/web-react';
import Router from './router';
import './App.css';
import '@arco-design/web-react/dist/css/arco.css';

const { Header, Sider, Content, Footer} = Layout;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={(
        <div>123</div>
      )}>
        <Switch>
          <Route
            path="/"
            render={() => (
              <Layout style={{ height: '840px' }}>
                <Layout>
                  {/* <Sider>Sider</Sider> */}
                  <Content>
                    <Router />
                  </Content>
                </Layout>
              </Layout>
            )}
          />
        </Switch>
      </Suspense>
      
      {/* <Switch>
        <Route
          path="/"
          render={() => (
            <Layout>
              <Router />
            </Layout>
          )}
        />
      </Switch> */}
    </BrowserRouter>
  );
}

export default App;
