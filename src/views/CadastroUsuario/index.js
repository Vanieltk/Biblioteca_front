import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Dropdown } from 'primereact/dropdown';

import * as S from './styles';
import Button from '../../components/Button';

import { useState, useEffect } from 'react';

import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function CadastroUsuario() {

    const [Categorias, setCategorias] = useState();
    const [Categoria, setCategoria] = useState();

    

    return (
        <S.Container>
            <S.CenterContainer>
            <h1>CADASTRO</h1>

            <div className='cadastro-esquerda'>
                <span className="p-float-label">
                <InputText className="in"/>
                <label htmlFor="in">Cidade</label>
                </span>
                <span className="p-float-label">
                <InputText className="in"/>
                <label htmlFor="in">Bairro</label>
                </span>
                <span className="p-float-label">
                <InputText className="in"/>
                <label htmlFor="in">Logradouro</label>
                </span>
                <span className="p-float-label">
                <InputText className="in"/>
                <label htmlFor="in">Número</label>
                </span>
                <span className="p-float-label">
                <InputMask mask="99999-999" className="in"></InputMask>
                <label htmlFor="in">CEP</label>
                </span>
                <Dropdown  id="drop" value={Categoria} options={Categorias}
                    placeholder="Categoria de Leitor"/>

            </div>
            <div className='cadastro-direita'>
                <span className="p-float-label">
                <InputText className="in"/>
                <label htmlFor="in">Nome Completo</label>
                </span>
                <span className="p-float-label">
                <InputText className="in"/>
                <label htmlFor="in">E-mail</label>
                </span>
                <span className="p-float-label">
                <InputMask mask="999.999.999-99" className="in"></InputMask>
                <label htmlFor="in">CPF</label>
                </span>
                <span className="p-float-label">
                <InputMask mask="(99) 9 9999-9999" className="in"></InputMask>
                <label htmlFor="in">Telefone</label>
                </span>
                <span className="p-float-label">
                <InputMask mask="99/99/9999" className="in"></InputMask>
                <label htmlFor="in">Data de Nascimento</label>
                </span>
            </div>
            <Button name="Cadastrar"></Button>
            </S.CenterContainer>

        </S.Container>


    )

}

export default CadastroUsuario;