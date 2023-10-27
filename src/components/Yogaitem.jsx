import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import allcontext from '../../context/Allcontext';

const Yogaitem = (props) => {

    const data = useContext(allcontext);
    const { setdataobj } = data;

    const { englishname, targets, url_svg, url_png, sanskrit_name, sanskrit_name_adapted, translation_name, pose_benefits, pose_description, level } = props;

    useEffect(() => {
        setdataobj({ englishname, targets, url_svg, url_png, sanskrit_name, sanskrit_name_adapted, translation_name, pose_benefits, pose_description, level });

    }, [])

    const buttonclick = () => {
        setdataobj({ englishname, targets, url_svg, url_png, sanskrit_name, sanskrit_name_adapted, translation_name, pose_benefits, pose_description, level });
    }

    return (

        <div className="max-w-sm sm:max-w-xs md:max-w-sm max-h-full rounded overflow-hidden shadow-md bg-gradient-to-b from-gray-800 to-gray-500 text-white">
            <img className="w-full" src={url_png} />
            <div className="px-6 md:py-4 pt-2 bg-gray-700">
                <div className="font-bold md:text-xl text-sm mb-2">
                    <span className='font-normal'>English name :</span>  {englishname}

                </div>
                <div className="font-bold md:text-xl text-sm mb-2">
                    <span className='font-normal'>Sanskrit name :</span>  {sanskrit_name}

                </div>

                <p className="text-gray-100 text-base ">
                    {pose_description}
                </p>
            </div>
            <div className="px-6 pt-1 pb-2 bg-gray-700">
                <Link className="text-lg" to="/details">
                    <button onClick={buttonclick} className="bg-blue-700 hover:bg-green-700 text-white md:py-2.5 md:px-3 py-1.5 px-1.5 rounded mb-2"> Read more</button>
                </Link>
            </div>
        </div>

    )

}

export default Yogaitem;
