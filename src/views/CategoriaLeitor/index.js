import HeaderAdmin from '../../components/HeaderAdmin';
import * as S from './styles';
import React from 'react';
import List from '../../components/List';
import { useState } from 'react';
import Item from '../../components/Item';

import Form from '../../components/Form';


function CategoriaLeitor() {
    const [itemsList, setItemsList] = useState([]);

    function onAddItem(newItem) {
      const item = new Item(newItem);
  
      setItemsList([...itemsList, item]);
    }
  
    function onItemDeleted(item) {
      const filteredItems = itemsList.filter(
        itemCurrent => itemCurrent.id !== item.id
      );
  
      setItemsList(filteredItems);
    }
  
    return (
        <S.Container>

            <HeaderAdmin />
            <S.CaixaContainer>
                <div className="todo-wrapper">
                    <h2>Categorias de Leitor</h2>

                    <Form onAddItem={onAddItem} />
  
                    <List onItemDeleted={onItemDeleted} itemsList={itemsList} />

                </div>


            </S.CaixaContainer>
        </S.Container>
    );
    }

export default CategoriaLeitor;

