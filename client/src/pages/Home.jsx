import React, { Component } from 'react'
import Header from './Header';
import Searchbar from './Searchbar';
import Drag from './Drag';
import Searchresults from './Searchresults';
import Vehicleinfo from './Vehicleinfo';
import '../assets/style1.css';


export default class Home extends Component {
  render() {
    return (
     <>
    
     <Header/>
    <Searchbar/>
    <Drag /> 
    {/* <Card /> */}
    {/* <Searchresults /> */}
    

    
     
     
     
     </>
    )
  }
}
