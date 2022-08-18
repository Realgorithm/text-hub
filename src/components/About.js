import React from "react";
import code from "../asset/image/code.png";
import preview from "../asset/image/preview.png";
import usedlang from "../asset/image/usedlang.png";

function About(props) {
  let styles = {
    container: {
      backgroundColor: props.mode === "dark" ? "#042741" : "white",
      color: props.mode === "light" ? "#042741" : "white",
    },
    btn: {
      backgroundColor: props.mode === "dark" ? "black" : "white",
      color: props.mode === "light" ? "#042741" : "white",
    },
    slideText:{
      color: "#FFFFFF",
    },
    slideBtn:{
      color: "red",
      backgroundColor:"brown"
    },
  };
  return (
    <div className="container mb-5" style={styles.container}>
      <h1>About Us</h1>
      {/* accordion starts here  */}
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={styles.btn}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={styles.container}>
              it is a absolute free and it is not showing to unwanted advertisement.it is not ask to fill any sensitive information
            </div>
          </div>
        </div>
        <div className="accordion-item" style={styles.container}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={styles.btn}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>MAde by Tabish</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Hey, I'm Tabish. I'm a web developer. You can send me feedback on my email.
              you can get code on github. click <a target="_blank" rel="noreferrer" href="https://github.com/Realgorithm/text-hub">here</a> to get code
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={styles.btn}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Easy to Use</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={styles.container}>
              <p>Hello Guys it is a easy to use web application</p>
            </div>
          </div>
        </div>
      </div>
      {/* accordion ends here  */}
      {/* Coruosel starts here */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide mt-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={code} className="d-block w-100" alt="Code" />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={styles.slideText}>Code Preview</h5>
              <p style={styles.slideText}>Here is a representation of code we used to build this website</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={preview} className="d-block w-100" alt="preview" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Webpages preview</h5>
              <p>Some representative from this webpage itself.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={usedlang} className="d-block w-100" alt="used language" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Used Language</h5>
              <p>Here we Used ReactJS, HTML, Bootstrap.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" style={styles.slideBtn}></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" style={styles.slideBtn}></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Coruosel ends here */}
    </div>
  );
}

export default About;
