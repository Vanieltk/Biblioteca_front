import React from "react";
import * as S from './styles';
import Header from '../../components/Header';
import Card from '../../components/Card';
import homeLogo from '../../assets/home-logo.png';


function Home(){
  return(
    <S.Conteiner>
        <Header/>
        <div className="teste"><br/></div>
        <S.ConteinerLogo><img src={homeLogo}/></S.ConteinerLogo>
        <S.ConteinerContent>
            <div className="div-traco">
                <h3>Livro ➤</h3>
                <div className="linha"></div>
            </div>
            <section>
                <Card/><Card/>
                <Card/><Card/>
                <Card/><Card/>
                <Card/><Card/>
                <Card/><Card/>
                <Card/><Card/>
                <Card/><Card/>
                <Card/><Card/>
                <Card/><Card/><Card/><Card/>
                <Card/><Card/>
                <Card/><Card/><Card/><Card/>
                <Card/><Card/>
                <Card/><Card/>
            </section>
            <div className="div-traco">
                <h3>Livro ➤</h3>
                <div className="linha"></div>
            </div>
            <section>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
            <div className="div-traco">
                <h3>Livro ➤</h3>
                <div className="linha"></div>
            </div>
            <section>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
            
            

        </S.ConteinerContent>
    </S.Conteiner>
    
    
  )
}

export default Home;