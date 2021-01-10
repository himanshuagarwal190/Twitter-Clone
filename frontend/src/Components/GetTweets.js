import axios from 'axios'

const instance = axios.create({
    withCredentials: true
  })

export default async function GetTweets(setLikeState){

    function likeTweet(e, tweetId){
        instance.put('/api/like',{
            key: tweetId
        })
        .then(() =>{
            setLikeState(true)
        })
    }

    return instance.get('/api/tweet')
        .then((response) =>{
            if(response.data.status === 200){
                const tweets = response.data.tweets.map((tweet)=>{
                    return(
                        <div key={tweet._id} className="flex flex-col border border-white w-6/12 self-center mt-10">
                            <p className="text-white px-4 py-2"><i className="fas fa-user pr-2"></i>{tweet.handle}</p>
                            <p className="text-white px-4 py-2">{tweet.message}</p>
                            <div className="flex justify-around h-10">
                                <button onClick={e => likeTweet(e, tweet._id)} className="w-1/2 border text-white"><i className="far fa-heart"></i> {tweet.Likes.length}</button>
                                <button className="w-1/2 border text-white cursor-pointer outline-none focus:outline-none"><i className="far fa-comments"></i></button>
                            </div>
                        </div>
                    )
                })
                return tweets
            }
        })
}