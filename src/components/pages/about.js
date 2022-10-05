import React from "react";
import profilePicture from "../../../static/assets/bio/profile-img.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        I have experience developing web applications in React and Javascript
        mostly in full stack setting, I have experience building full stack projects
        in react and the overall stack is python, react, redux, redis, Javascript
        html, css, ux, ul, uml diagrams, backend is python flask and much more
      </div>
    </div>
  );
}