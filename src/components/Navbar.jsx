import React, { useContext, useRef, useState } from 'react'
import { useEffect } from 'react'
import allcontext from '../../context/Allcontext'
import Bodypart from './Bodypart'
import Level from './Level'
let timerid;

const Navbar = () => {

    const data = useContext(allcontext);
    const { difficulty, part, inputdata, setinputdata, searchbar, getbodyparts, level, allbodyparts } = data;

    const inputRef = useRef(null);

    const hamburger = () => {
        console.log("inside hambur")
        const dropdown = document.getElementById('dropdown');
        dropdown.classList.toggle('hidden');
    }
    const hamburgerfor = () => {
        console.log("hamburger 2")
        const dropdownfor = document.getElementById('dropdownfor');
        dropdownfor.classList.toggle('hidden');
    }

    useEffect(() => {
        const option = document.getElementById("option");
        const optionfor = document.getElementById("optionfor");


        window.addEventListener('click', ((event) => {
            if (!option.contains(event.target) && event.target != option) {
                const dropdown = document.getElementById('dropdown');
                dropdown.classList.add('hidden');
            }
            if (!optionfor.contains(event.target) && event.target != optionfor) {
                const dropdownfor = document.getElementById('dropdownfor');
                dropdownfor.classList.add('hidden');
            }
        }))
    }, [])

    const searchange = (e) => {
        console.log("inside on change");
        let newinput = e.target.value;
        setinputdata(newinput);
    }

    useEffect(() => {
        clearTimeout(timerid);
        timerid = setTimeout(() => {
            if (inputdata != "") {
                searchbar(inputdata);
            }
        }, 1000);
    }, [inputdata])

    const removeFocus = () => {
        if (inputRef.current) {
            inputRef.current.blur(); // Call the blur() method to remove focus
        }
    };

    const keydownhandler = (e) => {
        if (e.key === 'Enter') {
            console.log("enter pressed");
            searchbar(inputdata);
            removeFocus();
            setinputdata("");
        }
    }
    useEffect(() => {
        getbodyparts();
    }, [])

    return (
        <div id="navmain" className="sticky top-[3px] navbar h-16 bg-gradient-to-r from-gray-800 lg:to-gray-400 to-gray-300 text-gray-100 flex justify-between items-center lg:mb-0 ">

            <div className="flex items-center justify-around w-full">
                <ul className="flex flex-row items-center space-x-4 md:mr-4">
                    <li className='ml-4'>
                        <h1 className='md:text-4xl text-lg font-bold font-serif text-white pr-4 md:ml-7 '>Iyoga</h1>
                    </li>
                </ul>

                <div className='flex flex-row h-11 mr-2'>

                    <input ref={inputRef} onChange={searchange} on className='w-full p-2 pl-5 md:rounded-l-md md:rounded-r-none rounded-md focus:outline-none text-black' type="text" name='credential' id='search' placeholder='search for yoga' onKeyDown={keydownhandler} value={inputdata
                    } />

                    <div id="menu" className={`relative hidden  md:inline-block text-left`}>
                        <div>
                            <button id="option" onClick={hamburger} type="button" className="inline-flex w-full justify-center gap-x-1.5 bg-gray-300 px-3 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300" aria-expanded="true" aria-haspopup="true">
                                <span className="mr-4">{difficulty}</span>
                                <div id="outin" className="flex flex-col mt-1">
                                    <i className="fa-solid fa-caret-down" style={{ color: "#111213" }}></i>
                                </div>
                            </button>
                        </div>

                        <div id="dropdown" className=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="option" aria-orientation="vertical" aria-labelledby="option-button" tabIndex="-1">
                            <div className="py-1" role="none">
                                {level && level.map((value) => {
                                    <Level level={value} />
                                })}

                            </div>
                        </div>
                    </div>

                    <div id="menu" className={`relative hidden  md:inline-block text-left`}>
                        <div>
                            <button id="optionfor" onClick={hamburgerfor} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-r-md bg-gray-300 px-3 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300" aria-expanded="true" aria-haspopup="true">
                                <div className="mr-4">{part}</div>
                                <div id="outin" className="flex flex-col mt-1">

                                    <i className="fa-solid fa-caret-down" style={{ color: "#111213" }}></i>

                                </div>
                            </button>
                        </div>

                        <div id="dropdownfor" className=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="option" aria-orientation="vertical" aria-labelledby="option-button" tabIndex="-1">
                            <div className="py-1" role="none">

                                {allbodyparts && allbodyparts.map((val) => {
                                    <Bodypart partname={val.BodyPart} />
                                })}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar;
