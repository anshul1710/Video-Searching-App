import React from 'react';
import VideoItem from './VideoItem';
class VideoList extends React.Component{

    render(){
        const list=this.props.items.map((video)=>{

        return(
            <VideoItem key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} item={video}></VideoItem>
        );
        }
        );
        return <div className="ui relaxed divided list">{list}</div>;
    }
}
export default VideoList;