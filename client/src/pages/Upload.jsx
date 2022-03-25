import React, { Component } from 'react'
import Faq from './Faq'
class Upload extends Component {
state = {
    files: [
      'nice.pdf',
      'verycool.jpg',
      'amazing.png',
      'goodstuff.mp3',
      'thankyou.doc'
    ]
  }
 handleDrop = (files) => {
    let Upload = this.state.files
    var i=0;
    for (var i = 0; i < files.length; i++) {
      if (!files[i].name) return
      Upload.push(files[i].name)
    }
    this.setState({files: Upload})
  }
render() {
    return (
      <Faq handleDrop={this.handleDrop}>
        <div style={{height: 300, width: 250}}>
          {this.state.files.map((file) =>
            <div key={0}>{file}</div>
          )}
        </div>
      </Faq>
    )
  }
}
export default Upload