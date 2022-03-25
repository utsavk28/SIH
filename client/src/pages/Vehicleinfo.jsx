import React, { Component } from 'react'

export default class Vehicleinfo extends Component {
  render() {
    return (
      <>
      
    
      <div className="drag-area">
        <div className="icon"><i className="fas fa-cloud-upload-alt" /></div>
        <header>Drag &amp; Drop to Upload File</header>
        <span>OR</span>
        <button>Browse File</button>
        <input type="file" hidden />
      </div>
      
      </>
    )
  }
}
