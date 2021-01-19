import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Login, Reg } from './pages'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact component={Home} path={'/'}></Route>
          <Route component={Login} path={'/login/:id'}></Route>
          <Route component={Reg} path={'/reg'}></Route>
          <Route render={() => <h2>404</h2>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
