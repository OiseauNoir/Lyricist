import React, { Component } from 'react'



class Lyrics extends Component {
  render(){
    return(
        <div>
          {this.props.renderLyrics}
        </div>
    )
  }
}
export default Lyrics;
