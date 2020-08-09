import React from "react";
import Header from './Header';
import Banniere from './Banniere';
import Cards from './Cards';
import Avantages from './Avantages';
import Arguments from './Arguments';
import Preview from './Preview';
import Notice from './Carousel/Notice';


import champs from '../assets/champs.jpg';


const sections = [
    { title: 'Accueil', url: '#' },
    { title: 'Notre Offre', url: '#' },
    { title: 'Qui Sommes Nous ?', url: '#' },
    { title: 'Contact', url: '#' },
    
  ];

  const bannierePost = {
    title: 'Bienvenue sur Huge',
    description:
      "Votre solution pour la gestion de culture !",
    image: champs,
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };
class Home extends React.Component{
    render () {
        return ( 
            <div>
            <Header title="Huge" sections={sections} />
            <Banniere post={bannierePost} />
            <Cards/>
            <Arguments/>
            <Avantages/>
            <Preview/>
            <Notice/>
        </div>
        )
        
    }
    
}
export default Home;