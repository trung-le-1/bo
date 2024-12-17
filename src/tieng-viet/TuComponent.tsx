import 'react'
import {Chu, Tu} from "./types.ts";
import ChuComponent from "./ChuComponent.tsx";

interface TuComponentProps {
    tu: Tu
    nhieuMau?: boolean
    onClick?: (chu: Chu) => void;
}

const TuComponent = ({tu, nhieuMau, onClick}: TuComponentProps) => {
    return (
        <div className="tu">
            {tu.chu.map((chu, index) => (
                <ChuComponent key={index} chu={chu} onClick={onClick} nhieuMau={nhieuMau}/>
            ))}
        </div>
    )
}
export default TuComponent