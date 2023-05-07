import Header from "./Header";
import TweetBody from "./TweetBody";
import Footer from "./Footer";

const Tweet = ({name,username,image}) => {
  return (
    <div className="tweet">
      <img
        src={image}
        alt="Profile Picture"
        height={50}
        width={50}
      />
      <div className="tweet-content">
        <Header name={name} />
        <TweetBody />
        <Footer />
      </div>
    </div>
  );
};

export default Tweet;