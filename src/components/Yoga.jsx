import React, { useState, useEffect, useContext } from 'react'
import allcontext from '../../context/Allcontext';
import Yogaitem from './Yogaitem';

const Yoga = () => {
    const data = useContext(allcontext);
    const { articles, datafetch } = data;

    useEffect(() => {
        datafetch();
    }, []);

    const capitalise = (value) => {
        let lower = value.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div className="container py-4 mx-auto w-[100vw] mb-5 2xl:mb-10">
            <h1 className='xl:text-6xl xl:my-10 md:text-5xl md:my-8 text-5xl mb-6  text-center font-extrabold  italic text-gray-800'>V-News : Top yoga</h1>

            <div className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-10 xl:gap-y-7 2xl:grid-cols-4">
                {articles && articles.map((element) => {

                    return <Yogaitem key={element.url_png} englishname={element.english_name} targets={element.targets} url_svg={element.url_svg} url_png={element.url_png} sanskrit_name={element.sanskrit_name} sanskrit_name_adapted={element.sanskrit_name_adapted} translation_name={element.translation_name} pose_benefits={element.pose_benefits} pose_description={element.pose_description} level={element.difficulty_level} />
                })}
            </div>


        </div >

    )
}


export default Yoga;
