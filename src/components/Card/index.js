import React from 'react';
import * as S from './styles';
import imgLivro from '../../assets/img-livro.jpeg';

function Card() {
  return (
    <S.Container>
      <S.ContainerImg><img src={imgLivro}/></S.ContainerImg>
      <S.ContainerLabel>asasasa</S.ContainerLabel>
    </S.Container>
  )
}

export default Card;