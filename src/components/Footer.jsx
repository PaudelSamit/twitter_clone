import { useState,useEffect } from "react";

const Footer = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>
  console.log("Hey this is Samit"),[count]
  );
  const toggle = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="tweet-footer">
      <button className="btn-reply">Reply</button>
      <button className="btn-retweet">Retweet</button>
      <button className="btn-like" onClick={toggle}>
        {count} Like
      </button>
      <button className="btn-share">Share</button>
    </div>
  );
};

export default Footer;