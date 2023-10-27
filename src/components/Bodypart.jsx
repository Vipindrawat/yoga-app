import React, { useContext } from 'react'
import allcontext from './context/Allcontext';

const Bodypart = (props) => {

    const data = useContext(allcontext);
    const { difficulty, setpart, combined, bodypart } = data;

    const buttonclick = (e) => {
        e.preventDefault();
        if (difficulty == "All") {
            setpart(props.partname);
            bodypart(props.partname);
        }
        else {
            setpart(props.partname);
            if (difficulty == "easy") {
                combined(props.partname, 1)
            }
            else if (difficulty == "medium") {
                combined(props.partname, 2)
            }
            else {
                combined(props.partname, 3)
            }
        }
    }
    return (
        <div>
            <button onClick={buttonclick} className={` block w-full px-4 py-2 text-left text-sm" role="optionitem ${location.pathname == '/login' ? "text-gray-300" : "text-gray-700"}`} tabIndex="-1" id="option-item-3"> {props.partname}</button>
        </div>
    )
}

export default Bodypart;
