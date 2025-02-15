import { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, date, source } =
      this.props;

    return (
      <div className="my-4">
        <div className="card">
        <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 0 }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
          <img
            src={imageURL ? imageURL : "https://via.placeholder.com/250"}
            className="card-img-top"
            alt="News"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a
              href={newsURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
