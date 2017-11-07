import React from "react";
import "./Footer.css";
import {Adinkra} from "react-adinkra";
import FontAwesome from "react-fontawesome";

class Footer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="footer col-sm-6">
          {this.props.social.map((item, index) => {
            return (
              <a className="a-space" key={item.name + index} href={item.url}><FontAwesome name={item.iconName}/></a>
            );
          })}
        </div>
        <div className="footer col-sm-6">
          <p><Adinkra style={{
        fontSize: "2em"
      }} name={'nyame-nti'}/>

            <b>{this.props.brandname} {this.props.copyRight}</b>
            <i className="fa fa-copyright" aria-hidden="true"></i>
          </p>
        </div>
      </div>
    </div>
    );
  }
}

export default Footer;

{/* <div>
  <p><FontAwesome name="facebook-square"/></p>
</div> */}
