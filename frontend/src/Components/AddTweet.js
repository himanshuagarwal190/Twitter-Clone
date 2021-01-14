import axios from "axios";
import { useState } from "react";

const instance = axios.create({
  withCredentials: true,
});

export default function AddTweet() {
  const [tweetMessage, setTweetMessageState] = useState("");

  function setTweet(e) {
    const message = e.target.value;
    if (message.length >= 200) {
      alert("Tweet must be less than 200 characters");
    } else {
      setTweetMessageState(e.target.value);
    }
  }

  function postTweet(e) {
    e.preventDefault();
    if (tweetMessage !== "") {
      addTweet();
    } else {
      alert("Enter Text");
    }
  }

  function addTweet() {
    instance
      .post("/api/tweet", {
        tweet: tweetMessage,
      })
      .then((response) => {
        if (response.data.status === 200) {
          alert(response.data.message);
          setTweetMessageState("");
        }
      });
  }

  return (
    <form onSubmit={postTweet} className="flex flex-col items-center">
      <textarea
        value={tweetMessage}
        onChange={setTweet}
        placeholder="What's on your mind?"
        className="w-96 mt-6 h-20 bg-gray-800 border border-white text-white rounded px-2"
      ></textarea>
      <input
        className="w-96 mt-6 h-10 bg-gray-800 border border-white text-white rounded px-2 cursor-pointer"
        type="submit"
        value="Tweet"
      />
    </form>
  );
}
