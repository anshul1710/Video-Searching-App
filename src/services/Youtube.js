import axios from 'axios'; 

const KEY='AIzaSyCtjncH_cZefhPTrRSl2WZJFKazfekADv0';

export default axios.create(
{
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
      part: 'snippet',
      marResults: 10,
      key:KEY
    }
}
)
