import React, { Component } from 'react';
import axios from 'axios';
import "../styles/quotescss.css";

export default class quotes extends Component{
    constructor(props){
        super(props);

        this.nextQuote = this.nextQuote.bind(this);

        this.state= {
            quotelist: "",
            quote: "",
            author1: ""
        }
    }
    componentDidMount(){
        axios.get("https://type.fit/api/quotes")
        .then(response => {
            console.log(response);
            this.setState({
                quotelist: response.data,
                quote: response.data[0].text,
                author: response.data[0].author
            })
        })
        .then(console.log(this.state.quotelist))
        .catch((err) => {
            console.log(err)
        })
    }


    nextQuote(){
        let randomIndex = Math.round(Math.random() * 100);
        this.setState({
            quote: this.state.quotelist[randomIndex].text,
            author : this.state.quotelist[randomIndex].author
        })
    }

    render(){
        return(
            <div className="contain">
            <div className="quote">
               Quote: " {this.state.quote} "
            </div>
            <div>
               Author: {this.state.author}
            </div>
            <br />
            <button onClick={this.nextQuote}>Next Quote</button>
            </div>

        )
    }
}