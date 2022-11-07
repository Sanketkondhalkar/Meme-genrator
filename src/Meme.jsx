import React, { useState } from 'react'
import './Meme.css'
import data from './data.js'

const Meme = () => {
    const [newImage, setNewImage] = useState("https://i.imgflip.com/30b1gx.jpg")
    const [inputData, setInputData] = useState({
        input1: "",
        input2: ""
    })
    const onChangeInputHandler = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }
    const { input1, input2 } = inputData;

    const GetImage = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        // console.log(randomIndex);
        let imgUrl = data[randomIndex]
        // console.log(imgUrl.url);
        setNewImage(imgUrl.url)
        setInputData({
            input1: "",
            input2: ""
        })
    }

    return (
        <div className="parentDiv">
            <div className="childDiv">
                <h1> Meme Generator </h1>
                <div className="inputDiv">
                    <input type="text" onChange={onChangeInputHandler} name="input1" value={input1} />
                    <input id='input2' type="text" onChange={onChangeInputHandler} name="input2" value={input2} />
                </div>
                <div className="btn">
                    <button onClick={GetImage}>Get A New Meme Image</button>
                </div>
                <div className="image">
                    <h2 style={{ position: 'absolute', marginTop: "15px" }}>{input1}</h2>
                    <h2 style={{
                        position: 'fixed',
                        bottom: '87px'
                    }}>{input2}</h2>
                    {console.log(`${input1} ${input2}`)}
                    <img src={newImage} alt="firstImage" />
                    {console.log(newImage)}
                </div>
            </div>
        </div>

    )
}

export default Meme