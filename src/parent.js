import React from 'react';
import Child from "./child";

const parent = () => {
    let books = [
        {
            name: "You are born to",
            year: 2013
        },
        {
            name: "Goverance for growth",
            year: 2014
        },
        {
            name: "The Family and the nation",
            year: 2005
        },
        {
            name: "wings of fire",
            year: 1999
        },
        {
            name: "you are unique",
            year: 2012
        },
    ];
    let getData = (a) => {
        books.forEach((x) => {
            if (x.year < a) {
                console.log(x.name);
            }
        });
    };
    return (
        <div >
            <Child Books={books} fun={getData} />
        </div>
    );
};

export default parent;