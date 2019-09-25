import React from "react";
import axios from "axios";
import "./style.css";
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
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.id}`)
      .then(res =>
        this.setState({
          posts: res.data
        })
      );
  }
  render() {
    return (
      <div className="wraper">
        {this.state.posts.map((el, key) => (
          <div className="card">
            <div className="box1">
              <img
                src="https://picsum.photos/536/354"
                class="card-img-top"
                alt="..."
              />
              <div className="post-title">
                <h4>{el.title}</h4>
              </div>

              <div className="description">
                <p className="card-text">{el.body}</p>
              </div>
              <Link to="/commmentaire">
                <i
                  class="far fa-comment"
                  onClick={event => this.props.getidpost(event.target.id)}
                  id={el.id}
                ></i>
                {/* <button
                  className="posts"
                  onClick={event => this.props.getidpost(event.target.id)}
                  id={el.id}
                >
                  COMMENTAIRE
                </button> */}
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default User;
