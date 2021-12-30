import React from 'react';
import * as S from './styles';
import imgLivro from '../../assets/img-livro.jpeg';

function Card(props) {
  return (
    <S.Container>
      <S.ContainerImg><img src={props.imagem}/></S.ContainerImg>
      <S.ContainerLabel>{props.name}</S.ContainerLabel>
    </S.Container>
  )
}

export default Card;