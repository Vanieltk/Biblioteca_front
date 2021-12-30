import React from "react";
import * as S from './styles';
import Header from '../../components/Header';
import Card from '../../components/Card';
import homeLogo from '../../assets/home-logo.png';



function Home(){
  return(
    <S.Conteiner>
        <Header/>
        <div className="div-retangulo-superior"><br/></div>
        <S.ConteinerLogo><img src={homeLogo}/></S.ConteinerLogo>
        <S.ConteinerContent>
            <div className="div-traco">
                <h3>Livros ➤</h3>
                <div className="linha"></div>
            </div>
            <section>
                <Card name="Lord of The Rings" imagem="https://m.media-amazon.com/images/I/51t0Z0DfEfL._AC_UY218_.jpg"/>
                <Card name="Extraordinário" imagem="https://images-na.ssl-images-amazon.com/images/I/41--5-gbIhL._SX346_BO1,204,203,200_.jpg"/>
                <Card name="Gravity Falls" imagem="https://images-na.ssl-images-amazon.com/images/I/51uN2ogHfrL._SY344_BO1,204,203,200_QL70_ML2_.jpg"/>
                <Card name="O Nome do Vento" imagem="https://images-na.ssl-images-amazon.com/images/I/51wN-qmInEL._SX346_BO1,204,203,200_.jpg"/>
                <Card name="A menina que Roubava Livros" imagem="https://i.pinimg.com/originals/ad/f0/b8/adf0b8235bdda40c2a0bd090698345a1.jpg"/>
                <Card name=""/>
                
            </section>
            <div className="div-traco">
                <h3>Periódicos ➤</h3>
                <div className="linha"></div>
            </div>
            <section>
                <Card name=""/>
                <Card name=""/>
                <Card name=""/>
                <Card name=""/>
            </section>
            <div className="div-traco">
                <h3>Teses ➤</h3>
                <div className="linha"></div>
            </div>
            <section>
                <Card name=""/>
                <Card name=""/>
                <Card name=""/>
                <Card name=""/>
            </section>
            
            

        </S.ConteinerContent>
    </S.Conteiner>
    
    
  )
}

export default Home;