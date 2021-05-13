import './App.css';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import BirthdayHome from "./components/Birthday-Card/BirthdayHome"
import QuoteHome from "./components/Quote-Card/QuoteHome"
import ComplimentaryHome from "./components/Complimentary-Card/ComplimentaryHome"
import TweetHome from "./components/Tweet-Card/TweetHome"
import CertificateHome from "./components/Certificate-Card/CertificateHome"
import CampaignHome from "./components/Campaign-Card/CampaignHome"
import BirthdayCardCreator from "./components/Birthday-Card/BirthdayCardCreator"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* //main components */}
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/birthday" component={BirthdayHome} />
          <Route exact path="/quote" component={QuoteHome} />
          <Route exact path="/buiness" component={ComplimentaryHome} />
          <Route exact path="/tweet" component={TweetHome} />
          <Route exact path="/certificate" component={CertificateHome} />
          <Route exact path="/campaign" component={CampaignHome} />

          {/* card creators link */}
          <Route exact path="/birthdaycardcreator" component={BirthdayCardCreator} />


        </Switch>
      </Router>
    </div>
  );
}

export default App;
