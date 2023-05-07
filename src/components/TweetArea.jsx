import axios from "axios";
import { useState } from "react";

const TweetArea = () => {
    const [text, setText] = useState('');
    function submitHandle() {
       upload();
    }
    const upload = async()=>{
        await axios.post("https://react-workshop.fly.dev/", { 
            authorname: "Samit Paudel", 
            content:"this is samit",
            avatar: "jhjh",
         
            image:"hhj"
        }).then((data)=> {
            console.log(data)
        }).catch((error)=> {
            console.log(error)
        })
    }

    return (
        <div>
            <textarea value={text} onChange={(e) => { setText(e.target.value) }} />
            <button onClick={submitHandle}>Tweet</button>
        </div>
    )
}

export default TweetArea;
