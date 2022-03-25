import React, { Component,useState } from 'react'
import axios from 'axios';
import Searchresults from './Searchresults';

var data = require('../assets/data.json');



export default class Searchbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    }
  }

  handleInputChanged(event) {

   
    this.setState({
      searchQuery: event.target.value
    });
  }

  handleButtonClicked() {
    var searchQuery = this.state.searchQuery;
    console.log('ablhdjln')


   console.log(data);
   //window.location.href = "https://youtube.com/results?search_query=" + searchQuery;
  }


  render(){
    return (
     <>
     
     <div className="update-bg-container">
          <div className="d-flex flex-row ">
            <div className="container h-100 d-flex">
              <div className="my-auto w-100">
                
                <div className="input-group input-group-xl">
                  <input type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="button-addon2"  value={this.state.searchQuery} onChange={this.handleInputChanged.bind(this)}/>
                  <div className="input-group-append">
                    <button className="btn btn-pink" type="submit" id="button-addon2"><i className="fa fa-search"  onClick={this.handleButtonClicked.bind(this)} /></button>
                  </div>

                 
                </div>
               
              </div>
            </div>
          </div>
        </div> 

     </>
    )
  }
  
}

