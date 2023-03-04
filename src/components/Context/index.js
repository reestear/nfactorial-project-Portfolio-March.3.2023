import { createContext } from "react";

function moveTo(id){
    const section = document.getElementById(id);

    section.scrollIntoView({behavior: 'smooth'});
}

export const Context = createContext(moveTo);