import React, { useContext } from 'react'
import allcontext from './context/Allcontext';

const Level = (props) => {

    const data = useContext(allcontext);
    const { setdifficulty, part, difficuiltylevel, combined } = data;
    const clickhandler = (e) => {
        e.preventDefault();
        if (part == "All") {
            if (props.level == "easy") {
                setdifficulty("easy");
                difficuiltylevel(1);
            }
            else if (props.level == "medium") {
                setdifficulty("medium");
                difficuiltylevel(2);
            }
            else {
                setdifficulty("hard");
                difficuiltylevel(3);
            }
        }
        else {
            if (props.level == "easy") {
                setdifficulty("easy");
                combined(part, 1);
            }
            else if (props.level == "medium") {
                setdifficulty("medium");
                combined(part, 2);
            }
            else {
                setdifficulty("hard");
                combined(part, 3);
            }

        }
    }
    return (
        <div>
            <button onClick={clickhandler} className={` block w-full px-4 py-2 text-left text-sm" role="optionitem text-gray-700`} tabIndex="-1" id="option-item-3">{props.level}</button>
        </div>
    )
}

export default Level
