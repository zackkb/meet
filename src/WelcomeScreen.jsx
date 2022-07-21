import React from "react";
import "./WelcomeScreen.css";
import welcome1 from "./welcome1.png";

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <h1>Welcome to the Meet app</h1>
      <h4>
        Log in to see upcoming events around the world for full-stack developers
      </h4>
      <div className="button_cont" align="center">
        <div class="google-btn">
          <div class="google-icon-wrapper">
            <img
              class="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
              alt="Google sign-in"
            />
          </div>
          <button
            onClick={() => {
              props.getAccessToken();
            }}
            rel="nofollow noopener"
            class="btn-text"
          >
            <b>Sign in with google</b>
          </button>
          <div>
            <img className="image" src={welcome1} alt="Welcome to Meet!" />
          </div>
        </div>
      </div>
      <a
        href="https://zackkb.github.io/meet/privacy.html"
        rel="nofollow noopener"
      >
        Privacy policy
      </a>
    </div>
  ) : null;
}
export default WelcomeScreen;
