
// // import "./App.css";
// // import Tweet from "./components/Tweet";
// // const App = () => {

// //   const data = [

// //     "Bibek Acharya",
// //     " helon",
// //     "jkjkekje jkkie"
// //   ];
// //   return (
// //     <>
// //       <Tweet name={"Samit Paudel"} />
// //       <Tweet name={"Bibek Acharya"} />
// //       <Tweet name={" hwloo there"}/>
// //       <Tweet name={" k xaa"} />
// //     </>
// //   );
// // };

// // export default App;


// import { useState, useEffect } from "react";
// import "./App.css";
// import Tweet from "./components/Tweet";
// import axios from "axios";
// import TweetArea from "./components/TweetArea";
// import Header from "./components/Header";
// // const names = ["nbcfg", "ahgdcbg", "Ajsbnxhvs", "dfhgvbg"];

// const App = () => {
//   const [tweets, setTweets] = useState([])
//   const fetchTweets = async () => {
//     const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all", {
//       headers: {
//         apikeys: '645739297213f63d4355cb6e',
//       }
//     });
//     setTweets(posts.data);
//   };

//   useEffect(() => {
//     fetchTweets();
//   }, []);
//   return (
//     <>
//       <TweetArea />
//       {tweets.map((tweet) => (

//         <Tweet name={tweet.authorname} image={tweet.avatar} key={tweet.authorname} />


//       ))
//       }


//       {/* <Tweet name="Samit" username="@samit" />
// <Tweet name="ram" username="@ram" />
// <Tweet name="Sam" username="@sam" /> */}

//     </>
//   )

// }

// export default App;





import './App.css';
import Tweet from './components/Tweet';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CreateTweet from './components/CreateTweet';

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const fetchTweets = async () => {
    const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all",{
      headers: {
        apikey: '645739297213f63d4355cb6e'
      }
    });
    setTweets(posts.data);
  };
  useEffect(() => {
    fetchTweets();
  }, [shouldRefresh]);
  return (
    <>
      <CreateTweet setShouldRefresh={setShouldRefresh}/>
      {/* <Tweet name="Kedar" username="@kedar1" time="4h" content="This is first tweet" picture={shivapic}/>
      <Tweet name="yogendra" username="@yogendra1" time="6h" content="This is second tweet" picture={iphonepic}/>
      <Tweet name="Lama"username="@lama12" time="8h" content="This is third tweet" picture={scooterpic}/>
      <Tweet name="Ram" username="@ram12" time="7h" content="This is last tweet" picture={msipic}/> */}
      {
        tweets.map((tweet) => {
          return <Tweet name={tweet.user.fullname} username={tweet.authorname} key={tweet._id} content={tweet.content} image={`https://avatars.githubusercontent.com/u/${tweet.user.githubId}`} picture={tweet.image} />
        })
      }
    </>
  );
};

export default App;