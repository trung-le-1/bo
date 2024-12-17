import './App.css'
import TuComponent from "./tieng-viet/TuComponent.tsx";
import {Chu, Tu} from "./tieng-viet/types.ts";
import {ChangeEvent, useState} from "react";


const speak = (chu: Chu) => {
    console.log(chu, chu.danhVan().join(' '))
    const msg = new SpeechSynthesisUtterance(chu.danhVan().join(' '));
    msg.lang = "vi-VN"
    window.speechSynthesis.speak(msg);
}

function App() {
    const [index, setIndex] = useState(0);
    const [list, setList] = useState<string[]>([]);

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newList = e.currentTarget.value.split(',').map(s => s.trim())
        if (newList.length <= index) {
            setIndex(0)
        }
        setList(newList)
    }
    return (
        <>
            <input onChange={inputChange} style={{marginBottom: "40px"}}/>
            {list.length > 0 && <TuComponent tu={new Tu(list[index])} nhieuMau={true} onClick={speak}/>}
            <div style={{marginTop: "40px", display: "flex", justifyContent: "space-between"}}>
                <button onClick={() => setIndex(index => index <= 0 ? list.length - 1 : index - 1)}>Quay lại</button>
                <button onClick={() => setIndex(index => index >= list.length - 1 ? 0 : index + 1)}>Tiếp theo</button>
            </div>
        </>
    )
}

export default App
