import React from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.props.id}`
      )
      .then(res =>
        this.setState({
          posts: res.data
        })
      );
  }
  render() {
    console.log(this.props.id);
    return (
      <div className="wraper">
        {this.state.posts.map((el, key) => (
          <div class="card col-10">
            <div class="row no-gutters">
              <div class="image-cropper">
                <img src="https://picsum.photos/536/354" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{el.name}</h5>
                  <p class="card-text">
                    <small class="text-muted">{el.email}</small>
                  </p>
                  <h6 class="card-title">{el.title}</h6>
                  <p class="card-text">{el.body}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default User;
