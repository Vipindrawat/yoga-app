import React, { useState } from 'react'
import allcontext from './Allcontext'
const Baseurl = "http://localhost:5000";

const Allstates = (props) => {
    // Varible for loading bar:
    const [progress, setprogress] = useState(0);

    const [articles, setArticles] = useState();
    // For fetching all yoga poses:
    const datafetch = async () => {
        setprogress(10);
        let url = `${Baseurl}/v1/poses`
        setprogress(40);
        //fetching data from api--
        let data = await fetch(url);
        let jsondata = await data.json();
        setprogress(80);
        setArticles(jsondata);
        setprogress(100);
    }

    const [dataobj, setdataobj] = useState({ englishname: "", targets: "", url_svg: "", url_png: "", sanskrit_name: "", sanskrit_name_adapted: "", translation_name: "", pose_benefits: "", pose_description: "", level: "" });

    const [difficulty, setdifficulty] = useState("All")
    const [part, setpart] = useState("All");
    const [inputdata, setinputdata] = useState("");
    const [level, setlevel] = useState(["easy", "medium", "hard"]);
    const [allbodyparts, setallbodyparts] = useState()

    // route for search bar:
    const searchbar = async (yoganame) => {
        setprogress(10);
        let url = `${Baseurl}/v1/poses?name=${yoganame}`
        setprogress(40);
        //fetching data from api--
        let data = await fetch(url);
        let jsondata = await data.json();
        setprogress(80);
        setArticles(jsondata);
        setprogress(100);
    }

    // Route for only difficuilty:
    const difficuiltylevel = async (levelno) => {
        setprogress(10);
        let url = `${Baseurl}/v1/poses?level=${levelno}`
        setprogress(40);
        //fetching data from api--
        let data = await fetch(url);
        let jsondata = await data.json();
        setprogress(80);
        setArticles(jsondata);
        setprogress(100);
    }

    // Route for getting body parts nme:
    const getbodyparts = async () => {
        setprogress(10);
        let url = `${Baseurl}/v1/bodyParts`
        setprogress(40);
        //fetching data from api--
        let data = await fetch(url);
        let jsondata = await data.json();
        setprogress(80);
        setallbodyparts(jsondata);
        setprogress(100);
    }

    // Route for only body part:
    const bodypart = async (partname) => {
        setprogress(10);
        let url = `${Baseurl}/v1/poses?bodyPart=${partname}`
        setprogress(40);
        //fetching data from api--
        let data = await fetch(url);
        let jsondata = await data.json();
        setprogress(80);
        setArticles(jsondata);
        setprogress(100);
    }

    // Route for all difficuilty+bodypart :
    const combined = async (partname, difflevel) => {
        setprogress(10);
        let url = `${Baseurl}/v1/poses?bodyPart=${partname}&&difficuilty=${difflevel}`
        setprogress(40);
        //fetching data from api--
        let data = await fetch(url);
        let jsondata = await data.json();
        setprogress(80);
        setArticles(jsondata);
        setprogress(100);
    }

    return (
        <div>
            <allcontext.Provider value={{
                dataobj, setdataobj, difficulty, setdifficulty, part, setpart, inputdata, setinputdata, articles, setArticles, progress, setprogress,
                datafetch, searchbar, difficuiltylevel, getbodyparts, bodypart, combined,
                allbodyparts, level
            }}>
                {props.children}
            </allcontext.Provider>
        </div>
    )
}

export default Allstates;
