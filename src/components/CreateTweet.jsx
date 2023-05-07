import { useState } from "react";
import axios from "axios";

const CreateTweet = ({setShouldRefresh}) => {
    const [tweetContent, setTweetContent] = useState("");
    const upload = async () => {
        try{
            await axios.post("https://react-workshop-todo.fly.dev/posts/", {
                content: tweetContent,
                image: 'https://blog.tryhackme.com/content/images/2022/02/TryHackMeThreats.png',
            },
            {
                headers: {
                    apikey:'645739297213f63d4355cb6e',
                }
            });
            setTweetContent("");
            setShouldRefresh((v) => !v);
        }
        catch(e){
            console.log(e);
            alert(e.message);
        }
    };
    // const handleSubmit = () => {
    //     upload();
    // };
    return (
        <div className="create-tweet">
            <textarea type="text" className="tweet-box" placeholder="What's Happening?"
                value={tweetContent} onChange={(e) => {
                    setTweetContent(e.target.value);
                }}
            />
            <div className="submit-button">
                <button type="" onClick={upload}>Tweet</button>
            </div>
        </div>
    );
}
export default CreateTweet;
