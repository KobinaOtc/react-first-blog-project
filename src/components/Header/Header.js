import React from "react";
import {Adinkra} from "react-adinkra";
import "./Header.css"

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-background"></div>

        <div>
          <header className="header">
            <div className="sub-sep">
              <p>{this.props.title}</p>

              <Adinkra style={{
                fontSize: "150%"
              }} name={'nyame-nti'} className="small"/>

              <p>{this.props.titleCont}</p>
            </div>

            <p className="caption">{this.props.caption}</p>
          </header>
        </div>
      </div>
    );
  }
}

export default Header
