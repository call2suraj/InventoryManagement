import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Config from './Config';
import AddLine from './AddLine';
import ExceptionReport from './ExceptionReport';
import LandingPage from './LandingPage';
import LocalizedStrings from 'react-localization';
import UserLogin from './UserLogin';


let strings = new LocalizedStrings({
  en:{
    how:"How do you want your egg today?",
    boiledEgg:"Boiled egg",
  },
  it: {
    how:"Come vuoi il tuo uovo oggi?",
    boiledEgg:"Uovo sodo",
  }
});

const Button = () => (
  <Route render={({ history}) => (
    <button
      type='button'
      onClick={() => { history.push('/Config') }}
    >
      Click Me!
    </button>
  )} />
)

const Home = () => (

  <div >
    <h2>Home ####  {strings.how}</h2>

  </div>
);


const About = () => (

  <div >
    <h2>About</h2>

  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);


class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      code:this.props.locale || 'en'
    }
    this.onSetLanguage = this.onSetLanguage.bind(this);
  }


  onSetLanguage (){
    strings.setLanguage(this.props.locale|| this.state.code);
  }

  render() {
    this.onSetLanguage();
    return (
      <Router>

        <div >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Config">Config</Link>
            </li>
            <li>
              <Link to="/addLine">AddLine</Link>
            </li>
            <li>
              <Link to="/exceptionReport">ExceptionReport</Link>
            </li>
            <li>
              <Link to="/landingPage">LandingPage</Link>
            </li>
            <li>
              <Link to="/userLogin">UserLogin</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route exact path="/UserLogin" component={UserLogin} />
          <Route exact path="/Config" component={Config} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={UserLogin} />
          <Route exact path="/addLine" component={AddLine} />
          <Route exact path="/landingPage" component={LandingPage} />
          <Route exact path="/exceptionReport" component={ExceptionReport} />
        </div>
      </Router>
    );
  }
}


export default Login;
