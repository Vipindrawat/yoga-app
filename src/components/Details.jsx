import React, { useContext } from 'react'
import allcontext from '../../context/Allcontext';


const Details = () => {
    const data = useContext(allcontext);
    const { dataobj } = data;
    const { englishname, targets, url_png, sanskrit_name, sanskrit_name_adapted, translation_name, pose_benefits, pose_description, level } = dataobj;

    return (
        <div className='container py-4 mx-auto w-[100vw] mb-5 2xl:mb-10'>

            <div className="bg-gradient-to-r from-gray-500 to-gray-200 rounded-lg shadow-lg p-4">
                <div className="flex justify-between mb-4">
                    <h2 className="text-2xl font-semibold">{englishname}</h2>
                    <span className="text-gray-500">Difficulty Level: {level}</span>
                </div>
                <div className="w-full flex justify-center">
                    <img src={url_png} alt={englishname} className="w-full h-auto xl:h-[50%] xl:w-[50%] mb-4 bg-blue-300 align-middle" />
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Description:</h3>
                    <p>{pose_description}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Sanskrit Name:</h3>
                    <p>{sanskrit_name} ({sanskrit_name_adapted})</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Translation:</h3>
                    <p>{translation_name}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Targets:</h3>
                    <ul>
                        {targets.map((target, index) => (
                            <li key={index}>{target}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Benefits:</h3>
                    <p>{pose_benefits}</p>
                </div>
            </div>


        </div>
    )
}

export default Details
