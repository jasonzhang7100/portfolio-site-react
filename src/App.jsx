import { Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TechStack from './pages/TechStack';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './global.css';

const App = () => (
  <>
    <CssBaseline />
    <Navbar />
    <Switch>
      <Route path="/techstack" component={TechStack} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Home} />
    </Switch>
  </>
);

export default App;
