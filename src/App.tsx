import './App.css'
import TuComponent from "./tieng-viet/TuComponent.tsx";
import {Chu, Tu} from "./tieng-viet/types.ts";
import {ChangeEvent, useMemo, useState} from "react";


function App() {
    const [index, setIndex] = useState(0);
    const [list, setList] = useState<string[]>([]);
    const [danhVan, setDanhVan] = useState<boolean>(false);
    const [tatCa, settatCa] = useState<boolean>(false);
    const tu = useMemo(() => list[index] ? new Tu(list[index]) : null, [list, index]);

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newList = e.currentTarget.value.split(',').map(s => s.trim())
        if (newList.length <= index) {
            setIndex(0)
        }
        setList(newList)
    }

    const speak = (chu: Chu) => {
        let msg: SpeechSynthesisUtterance

        if (!tatCa) {
            msg = new SpeechSynthesisUtterance(danhVan ? chu.danhVan().join(' ') : chu.raw);
        } else if (tu) {
            const str = danhVan ? tu.chu.flatMap(c => c.danhVan()).join(' ') : ''
            msg = new SpeechSynthesisUtterance(str + ' ' + tu.raw);
        } else {
            return
        }
        msg.lang = "vi-VN"
        window.speechSynthesis.speak(msg);

    }

    return (
        <>
            <div>
                <div>
                    <input id="danhVan" type="checkbox" checked={danhVan}
                           onChange={(e) => setDanhVan(e.target.checked)}/>
                    <label htmlFor="danhVan">Đánh Vần</label>
                </div>
                <div>
                    <input id="tatCa" type="checkbox" checked={tatCa} onChange={(e) => settatCa(e.target.checked)}/>
                    <label htmlFor="tatCa">Đọc Tất Cả</label>
                </div>
                <div>
                    <input onChange={inputChange} style={{marginBottom: "40px"}}/>
                </div>
            </div>
            {tu && <TuComponent tu={tu} nhieuMau={danhVan} onClick={speak}/>}
            <div style={{marginTop: "40px", display: "flex", justifyContent: "space-between"}}>
                <button onClick={() => setIndex(index => index <= 0 ? list.length - 1 : index - 1)}>Quay lại</button>
                <button onClick={() => setIndex(index => index >= list.length - 1 ? 0 : index + 1)}>Tiếp theo</button>
            </div>
        </>
    )
}

export default App
