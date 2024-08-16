import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offers/Offers";
import NewCollection from "../Components/New Collections/NewCollections";
import NewsLetter from "../Components/News Letter/NewsLetter";


const Shop = () =>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollection />
            <NewsLetter/>
        </div>
    )
}

export default Shop