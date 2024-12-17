import 'react'
import {Chu} from "./types.ts";

interface TuComponentProps {
    chu: Chu
    nhieuMau?: boolean
    onClick?: (chu: Chu) => void;
}

const ChuComponent = ({chu, nhieuMau, onClick}: TuComponentProps) => {
    return (
        <div className={`chu ` + (nhieuMau ? 'nhieu-mau' : '')} onClick={() => onClick?.(chu)}>
            {chu.phuAmTruoc && <div className="phu-am-truoc">{chu.phuAmTruoc}</div>}
            {chu.nguyenAm && <div className="nguyen-am-chinh">{chu.nguyenAm}</div>}
            {chu.phuAmSau && <div className="phu-am-sau">{chu.phuAmSau}</div>}
        </div>
    )
}
export default ChuComponent