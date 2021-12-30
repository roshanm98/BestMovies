import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import sdata from "./Sdata";
import "./index.css";


ReactDOM.render(
    <>


        <h1>List of best movie</h1>
        <Card 
        imgsrc={sdata[0].imgsrc}
        title={sdata[0].title}
        fnmae={sdata[0].fnmae}
        link={sdata[0].link}
        />

        <Card 
        imgsrc={sdata[1].imgsrc}
        title={sdata[1].title}
        fnmae={sdata[1].fnmae}
        link={sdata[1].link}
        />
        
        <Card 
        imgsrc={sdata[2].imgsrc}
        title={sdata[2].title}
        fnmae={sdata[2].fnmae}
        link={sdata[2].link}
        />




    </>,document.getElementById("root")
);
