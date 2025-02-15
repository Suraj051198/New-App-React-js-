import { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 20;
  apiKey = '40f0bbabd01d48c098a946ce6665dea3'
  state={
    progress:0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar height={3} color="#f11946" progress={this.state.progress}/>
          <Switch>
            <Route exact path="/" render={() => <News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/Entertainment" render={() => <News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path="/Business" render={() => <News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/General" render={() => <News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/Health" render={() => <News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/Science" render={() => <News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/Technology" render={() => <News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
            <Route exact path="/Sports" render={() => <News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
          </Switch>
        </Router>
      </div>
    );
  }
}
