import { Image } from "react-bootstrap";

import { useState } from 'react'
import notcoin from "../assets/img/notcoin-img.png"
import "./Not.css"

import gift from "../assets/img/gift-box.png"
import coin from "../assets/img/notcoin-img.png"
import rocket from "../assets/img/rocket.png"
import stars from "../assets/img/stars.png"


export default function Notcoin() {
    const [count, setCount] = useState(0)
    return (
        <div className="container">
            <div className="notcoin">
                <h1 type="number" className="number">{count}</h1>
                <button style={{ background: "transparent" }} onClick={() => setCount((count) => count + 1)}>
                    <Image src={notcoin} className="notcoin-img" />
                </button>
                <div className="icon-father">
                <Image src={gift} className="icons" />
                <Image src={coin} className="icons" />
                <Image src={rocket} className="icons" />
                <Image src={stars} className="icons" />
                </div>

            </div>
        </div>
    )
}

