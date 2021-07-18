import { Component } from "react";
import "./contentStyle.css";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="content-wrapper">
        <div className="info-container">
          <div className="sm-img"></div>
          <div className="info">
            Ada provides a general symptom assessment, whatever your symptoms
            and will also consider Covid-19 where relevant. For up-to-date
            guidance specific to Covid-19, please use the WHO website.
          </div>
          <div className="info-links">
            <div className="link">
              <a href="https.google.com">Learn more on the WHO website</a>
            </div>
            <div className="link">
              <a href="https.google.com">Continue using Ada</a>
            </div>
                </div>
                <div className="brand-name">ada</div>
        </div>
      </div>
    );
  }
}

export default Content;
