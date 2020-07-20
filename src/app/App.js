import React from 'react';
import { Switch } from 'react-router';
import PublicRoute from './routes/PublicRoute';

/* import pages */
import Home from '../pages/Home';
import HomepageLayout from '../pages/HomepageLayout';


function App() {
  return (
    <div className="website">
      <Switch>
        <HomepageLayout>
          <PublicRoute exact path="/" component={Home} heroActive />
        </HomepageLayout>
      </Switch>
    </div>
  );
}

export default App;
