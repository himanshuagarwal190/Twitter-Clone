import axios from 'axios'
import { useEffect, useState } from 'react'

const instance = axios.create({
    withCredentials: true
  })

export default function GetTweets(){

    const [loading, setLoadingState] = useState(true)
    const [viewTweets, setViewTweetsState] = useState()

    function likeTweet(e, tweetId){
        instance.put('http://localhost:5000/api/like',{
            key: tweetId
        })
        .then((response) =>{
            if(response.data.status === 200){
                e.target.childNodes[1].innerHTML = (parseInt(e.target.childNodes[1].innerHTML) + 1).toString()
            }
            else if(response.data.status === 201){
                e.target.childNodes[1].innerHTML = (parseInt(e.target.childNodes[1].innerHTML) - 1).toString()
            }
            else {
                console.log('Error Like Tweet')
            }
        })
    }

    function fetchTweets(){
        instance.get('http://localhost:5000/api/tweet')
        .then((response) =>{
            if(response.data.status === 200){
                const tweets = response.data.tweets.map(tweet =>{
                    return(
                        <div key={tweet._id} className="flex flex-col border border-white w-6/12 self-center mt-10">
                            <p className="text-white px-4 py-2"><i className="fas fa-user pr-2"></i>{tweet.handle}</p>
                            <p className="text-white px-4 py-2">{tweet.message}</p>
                            <div className="flex justify-around h-10">
                                <div onClick={e =>{likeTweet(e, tweet._id)}} className="flex border text-white w-1/2 justify-center items-center cursor-pointer">
                                    <i className="far fa-heart text-lg"></i>
                                    <p className="ml-2 text-lg">{tweet.Likes.length}</p>
                                </div>
                                <button className="w-1/2 border text-white cursor-pointer outline-none focus:outline-none"><i className="far fa-comments"></i></button>
                            </div>
                        </div>
                    )
                })
                setViewTweetsState(tweets)
                setLoadingState(false)
            }
                })
    }

    useEffect(() =>{
        if(loading){
            fetchTweets()
        }
    })

    return(
        loading 
        ? <p className="text-3xl text-white text-center mt-10">...Loading</p>
        : viewTweets
    )
}