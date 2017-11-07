import React from "react";
import "./Section.css";
import {Adinkra} from "react-adinkra";
import FontAwesome from "react-fontawesome";
import Button from "../Button"

class Section extends React.Component {
  render() {
    return (
      <div className="Articles">
        {this.props.data.map((item, index) => {
          return (
            <section className="the-section container" key = {item.name + index}>
              <div className="row display-block">
                <h2>{item.titleOfArti}</h2>
                <h4>{item.author}</h4>
                <h5>{item.date}</h5>
              </div>
              <div className="row">
                <div className="col-md-10">
                  <img src={item.image} className="size img-fluid"/>
                </div>
                <div className="col-md-2">
                  <div className="row my-2">
                    <Button btnName="Follow Twitter"/>
                  </div>
                  <div className="row my-5">
                    <Button btnName="Subscribe"/>
                  </div>
                  <div className="row my-3">
                    <Button btnName="Like"/>
                  </div>
                </div>

              </div>
              <p>{item.content}</p>
            </section>
          );
        })}

      </div>
    );
  }
}

export default Section;
