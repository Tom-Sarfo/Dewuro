import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        {/* Add more routes here as needed */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;