import React, { Component } from 'react'
import './Links.css'


const articleLinks = [
    {
        imageUrl: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
        title: 'Single Orcs in Indianapolis',
        alt: "orc"

    },
    {
        imageUrl:"https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
        title: "You won't believe what's under this mountain",
        alt: "mountain"
    },
    {
        imageUrl: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
        title:"Mine 20% more gold with One Weird Trick",
        alt: "gold"
    },
    {
        imageUrl:"http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
        title: "Surprise for Indiana Hobbits born before 1999",
        alt: "hobbit"
    },
]

class Links extends Component {
    render() {
        return (
            <div className="small-12 columns other-articles">
                    <h2>From around the Realm</h2>
                    {articleLinks.map((link, i) => {
                        return(
                       <div key={i} className="small-6 medium-3 columns other-article">
                        <a href="#">
                            <img src={link.imageUrl} alt={link.alt} />
                            <p>{link.title}</p>
                        </a> 
                        </div> )   
                    })}
                </div>
        )
    }
}
//Create a function (props) makes map easier to look at 

export default Links