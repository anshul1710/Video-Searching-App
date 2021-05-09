import React from 'react';
import '../styles/VideoItem.css';
class VideoItem extends React.Component{
   
  
   OnVideoClick = ()=>{
    
       this.props.onVideoSelect(this.props.item);
   }

    render(){
        return(
            <div onClick={this.OnVideoClick} className=" video-item item">
                <img  alt={this.props.item.snippet.title} className="ui image" src={this.props.item.snippet.thumbnails.medium.url}></img>
                <div className="content">
                <div className="header">
             {this.props.item.snippet.title}
             </div>
             </div>
            </div>
        );
    }
}
export default VideoItem;