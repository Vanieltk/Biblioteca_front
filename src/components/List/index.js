import React from 'react';
import * as S from './styles';

// import './styled.css';

function List (props) {
  return(
    <S.Container>
      <ul className="todo-list">
      {props.itemsList.map(item => (
        <li key={item.id}>
          {item.text}
          <button onClick={props.onItemDeleted(item)}>
            <img src="../../../assets/bin.png" alt="icon" />{' '}
          </button>
        </li>
      ))}
      </ul>
    </S.Container>  
);
}

export default List;