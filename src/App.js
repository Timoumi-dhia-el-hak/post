import React from "react";
import "./App.css";
import User from "./component/user";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Posts from "./component/posts";
import Postdescriptions from "./component/Commentaire";
import { Button } from "reactstrap";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      idpost: null
    };
  }
  getid = idpost => {
    this.setState({
      id: idpost
    });
  };
  getidpost = id => {
    this.setState({
      idpost: id
    });
  };
  render() {
    const styleapp = { padding: "2%", flexWrap: "wrap" };
    return (
      <div className="App" style={styleapp}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <User getid={this.getid} />}
            />
            <Route
              exact
              path="/posts"
              component={() => (
                <Posts id={this.state.id} getidpost={this.getidpost} />
              )}
            />
            <Route
              exact
              path="/commmentaire"
              component={() => <Postdescriptions id={this.state.idpost} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
