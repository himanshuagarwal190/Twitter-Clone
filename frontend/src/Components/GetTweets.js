import axios from 'axios'
import { useEffect, useState } from 'react'

const instance = axios.create({
    withCredentials: true
  })

export default function GetTweets(){

    const [loading, setLoadingState] = useState(true)
    const [getTweets, setGetTweetsState] = useState()
    const [likes, setLikesState] = useState()

    function likeTweet(tweetId){
        instance.put('http://localhost:5000/api/like',{
            key: tweetId
        })
        .then((response) =>{
            if(response.data.status === 200){
                setLikesState(likes =>{
                    const newLikesState = {...likes}
                    newLikesState[tweetId] += 1
                    return newLikesState
                })
            }
            else if(response.data.status === 201){
                setLikesState(likes =>{
                    const newLikesState = {...likes}
                    newLikesState[tweetId] -= 1
                    return newLikesState
                })
            }
            else {
                console.log('Error Liking Tweet')
            }
        })
    }
    
    useEffect(() =>{
        instance.get('http://localhost:5000/api/tweet')
        .then((response) =>{
            if(response.data.status === 200){
                const likeCount = {}
                response.data.tweets.forEach(tweet =>{
                    const id = tweet._id
                    likeCount[id] = tweet.Likes.length
                })
                setLikesState(likeCount)
                setGetTweetsState(response.data.tweets)
                setLoadingState(false)
            }
        })
    }, [])

    return(
        loading 
        ? <p className="text-3xl text-white text-center mt-10">...Loading</p>
        : getTweets.map(tweet =>{
            return(
                <div key={tweet._id} className="flex flex-col border border-white w-6/12 self-center mt-10">
                    <p className="text-white px-4 py-2"><i className="fas fa-user pr-2"></i>{tweet.handle}</p>
                    <p className="text-white px-4 py-2">{tweet.message}</p>
                    <div className="flex justify-around h-10">
                        <button onClick={() => likeTweet(tweet._id)} className="w-1/2 border text-white"><i className="far fa-heart"></i> {likes[tweet._id]}</button>
                        <button className="w-1/2 border text-white cursor-pointer outline-none focus:outline-none"><i className="far fa-comments"></i></button>
                    </div>
                </div>
            )
         })
    )
}