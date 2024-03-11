import React from "react";

import './Counters.css';

function Counters(){
    return(
        <div id = "counters">
        <div className="container">
        <div className="row">
        <div className="col-md-3 col-sm-6">
        <div className="counter">
        <div className="counter-icon"><i className="fa fa-calendar"></i></div>
        <div className="number"> <span>12</span></div>
        <h4 className="font-weight">Years of Experience</h4>
        </div>
        </div>
        <div className="col-md-3 col-sm-6">
        <div className="counter">
        <div className="counter-icon"><i className="fa fa-check"></i></div>
        <div className="number"> <span>999</span></div>
        <h4 className="font-weight">Completed Projects</h4>
        </div>
        </div>
        <div className="col-md-3 col-sm-6">
        <div className="counter">
        <div className="counter-icon"><i className="fa fa-users"></i></div>
        <div className="number"> <span>480</span></div>
        <h4 className="font-weight">Total Clients</h4>
        </div>
        </div>
        <div className="col-md-3 col-sm-6">
        <div className="counter">
        <div className="counter-icon"><i className="fa fa-heart"></i></div>
        <div className="number"> <span>15</span></div>
        <h4 className="font-weight">Award Won</h4>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Counters;