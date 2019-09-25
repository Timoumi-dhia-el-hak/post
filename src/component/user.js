import React from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import "./style.css";
import { Button } from "reactstrap";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res =>
      this.setState({
        users: res.data
      })
    );
  }
  render() {
    return (
      <div className="wraper">
        {this.state.users.map((user, key) => (
          <div className="card">
            <div className="box">
              <div class="image-cropper">
                <img
                  src="https://picsum.photos/536/354"
                  class="profile-pic"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <p>{user.name}</p>
              </div>
            </div>
            <div className="card-body">
              <p>UX UI/Designer</p>
            </div>
            <div className="description">
              <p className="card-text">
                Sed rutrum varius dui, non egestas nunc iaculis ut. Sed luctus
                dui sit amet nisi venenatis, sit amet scelerisque nisl
                vulputate. Ut velit nunc, molestie sed blandit vel, elementum
                efficitur ante.
              </p>
            </div>
            <Link to="/posts">
              <button
                outline
                color="primary"
                className="posts"
                onClick={event => this.props.getid(event.target.id)}
                id={user.id}
              >
                POSTS
              </button>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default User;
