import axios from 'axios'

const instance = axios.create({
    withCredentials: true
  })

export default async function addTweet(tweetMessage){
    return instance.post('/api/tweet',{
            tweet: tweetMessage
        })
        .then((response)=>{
            if(response.data.status === 200){
                alert(response.data.message)
            }
            return true
        })
}