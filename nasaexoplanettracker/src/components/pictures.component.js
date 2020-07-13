import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "../styles/picturescss.css";

const DateInput = props => (
    <div>
    Select a Date:
    <br />
    <DatePicker
      selected={props.date}
      onChange={props.changeDate}
    />
  </div>
  );

const Photo = props => (
    <div>
    <h3>{props.photo.title}</h3>
    <h5>{props.photo.date}</h5>
    <img src={props.photo.hdurl} alt={props.photo.title} />
    <p>{props.photo.explanation}</p>
  </div>
)



export default class pictures extends Component {
  constructor(props) {
    super(props);

    this.changeDate = this.changeDate.bind(this);
    this.formatDate = this.formatDate.bind(this);

    this.state = {
      photo: "",
      date: moment(),
    };
  }

  formatDate = moment => {
    let year = moment.getFullYear();
    let month = moment.getMonth() + 1;
    let day = moment.getDate();
    return `${year}-${month}-${day}`;
    }

    changeDate = dateFromInput => {
        this.setState({ date: dateFromInput });
        this.getPhoto(this.formatDate(dateFromInput));
      };

      getPhoto = date => {
        fetch("https://api.nasa.gov/planetary/apod?date=" + date + "&api_key=TEMqEGHcuEd7bkL11ebCVuphCip6wgg4raZs68E0")
          .then(response => response.json())
          .then(photoData => this.setState({ photo: photoData }));
      };

  render() {
    return (
      <div>
        <h1>NASA's Astronomy Picture of the Day</h1>
        <DateInput changeDate={this.changeDate} />
        <Photo photo={this.state.photo} />
      </div>
    );
  }
}
