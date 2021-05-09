import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../services/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component{

state={items:[],selectedVideo:null};



    componentDidMount(){
this.onSearchSubmit('cats');
    }



    onSearchSubmit =  async (val) =>{
        const ytData= await Youtube.get('search',{
            params:{
                q:val
            }
        });
        this.setState({items:ytData.data.items,
        selectedVideo:ytData.data.items[0]});
    }


    onVideoSelect = (video) =>{
        console.log(video);
        this.setState({selectedVideo: video});
    }

    render()
    {
        return(
            <div  className="ui container">
                <SearchBar onFormSubmit={this.onSearchSubmit}></SearchBar>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo}></VideoDetail>
                    </div>
                    <div className="five wide column">
                    <VideoList onVideoSelect={this.onVideoSelect} items={this.state.items}></VideoList>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;