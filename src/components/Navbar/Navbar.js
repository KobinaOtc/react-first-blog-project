import React from "react";
import "./Navbar.css";
import {Adinkra} from "react-adinkra";


class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Adinkra style={{
            fontSize: "300%"
          }} name={'nyame-nti'}/>

          <a className="navbar-brand" href="#">
            {this.props.brandname}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {this.props.links.map((item, index) => {
                return (
                  <li className="nav-item active" key={item.name + index}>
                    <a className="nav-link" href={item.local}>{item.name}</a>
                  </li>
                )
              })}
              {/* <li className="nav-item active">
                <a className="nav-link" href="#">{this.props.tab1}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{this.props.tab2}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {this.props.dropdown}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">{this.props.dropdown1}</a>
                  <a className="dropdown-item" href="#">{this.props.dropdown2}</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">{this.props.dropdownSomewhere}</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">{this.props.disabled}</a>
              </li> */}
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">{this.props.search}</button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar

//Copy to App.js
//<Navbar brandname="" tab1="" tab2="" dropdown="" dropdown1="" dropdown2="" dropdownSomewhere="" disabled="" search=""/>
