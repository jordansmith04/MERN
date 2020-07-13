import React, { Component } from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Planet = props => (
    <tr className="tabledata">
      <td>{props.planets.pl_hostname}</td>
      <td>{props.planets.pl_name}</td>
      <td>{props.planets.pl_pnum}</td>
      <td>{props.planets.pl_orbper}</td>
      <td>{props.planets.pl_masse}</td>
      <td>{props.planets.st_dist}</td>
      <td>{props.planets.st_teff}</td>
      <td>{props.planets.pl_disc}</td>
    </tr>
  )

export default class ExercisesList extends Component{
   constructor(props){
       super(props);

       this.planetList = this.planetList.bind(this);

       this.state ={planets: []};
   }

   componentDidMount(){
       axios.get('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&count=100&select=pl_hostname,pl_name,pl_pnum,pl_orbper,pl_masse,st_dist,st_teff,pl_disc&sort=pl_disc+desc&where=pl_disc>2019&format=json')
       .then(response => {
           console.log(response)
           this.setState({
               planets: response.data
           })
       })
       .catch((err) => {
           console.log(err)
       })
   }

  planetList() {
    return this.state.planets.map(currentplanet => {
      return <Planet planets={currentplanet} />;
    })
  }

    render(){
        return(
            <div>
        <h3>Exoplanets</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Host Star Name</th>
              <th>Planet Name</th>
              <th>Number of planets in system</th>
              <th>Orbital Period in Days</th>
              <th>Planetary Mass in Earths</th>
              <th>Distance in Parsecs</th>
              <th>Effective Temperature in Kelvin</th>
              <th>Discovery Date</th>
            </tr>
          </thead>
          <tbody>
            { this.planetList() }
          </tbody>
        </table>
      </div>
        )
    }
}