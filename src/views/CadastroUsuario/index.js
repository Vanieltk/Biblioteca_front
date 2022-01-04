import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { InputMask } from 'primereact/inputmask';
import { Dropdown } from 'primereact/dropdown';

import * as S from './styles';
import Button from '../../components/Button';
import api from '../../services/api'

import { useState, useEffect } from 'react';

import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



function CadastroUsuario() {

    const [Categorias, setCategorias] = useState();
    const [Categoria, setCategoria] = useState();

    const [formData, setFormData] = useState({});


    function getDataAxios() {
        api.get("/usuario/filter/all").then((response) => console.log(response))
    }

    function postData() {
        //primeiro parametro a rota, segundo o objeto enviado no body da requisição
        api.post('/usuario', formData).then((response) => console.log(response))
    }

    return (
        <S.Container>
            <S.CenterContainer>
                <h1>CADASTRO</h1>

                <div className='cadastro-esquerda'>
                    <span className="p-float-label">
                        <InputText onChange={(e) => {
                            setFormData({
                                ...formData,
                                nomecompleto: e.target.value
                            })
                        }} className="in" />
                        <label htmlFor="in">Nome Completo:</label>
                    </span>

                    <span className="p-float-label">
                        <InputText onChange={(e) => {
                            setFormData({
                                ...formData,
                                emailaddress: e.target.value
                            })
                        }} className="in" />
                        <label htmlFor="in">E-mail:</label>
                    </span>

                    <span className="p-float-label">
                        <InputMask value={formData.cpf} onChange={(e) => {
                            setFormData({
                                ...formData,
                                cpf: e.target.value
                            })
                        }} mask="999.999.999-99" className="in"></InputMask>
                        <label htmlFor="in">CPF:</label>
                    </span>

                    <span className="p-float-label">
                        <InputMask value={formData.telefone} onChange={(e) => {
                            setFormData({
                                ...formData,
                                telefone: e.target.value
                            })
                        }} mask="(99) 9 9999-9999" className="in"></InputMask>
                        <label htmlFor="in">Telefone:</label>
                    </span>

                    <span className="p-float-label">
                        <InputMask value={formData.datanascimento} onChange={(e) => {
                            setFormData({
                                ...formData,
                                datanascimento: e.target.value
                            })
                        }} mask="99/99/9999" className="in"></InputMask>
                        <label htmlFor="in">Data de Nascimento:</label>
                    </span>

                    <span className="p-float-label">
                        <Password onChange={(e) => {
                            setFormData({
                                ...formData,
                                senha: e.target.value
                            })
                        }} feedback={false} className="in" />
                        <label htmlFor="in">Senha:</label>
                    </span>

                </div>
                <div className='cadastro-direita'>

                    <span className="p-float-label">
                        <InputText onChange={(e) => {
                            setFormData({
                                ...formData,
                                cidade: e.target.value
                            })
                        }} className="in" />
                        <label htmlFor="in">Cidade:</label>
                    </span>

                    <span className="p-float-label">
                        <InputText onChange={(e) => {
                            setFormData({
                                ...formData,
                                bairro: e.target.value
                            })
                        }} className="in" />
                        <label htmlFor="in">Bairro:</label>
                    </span>

                    <span className="p-float-label">
                        <InputText onChange={(e) => {
                            setFormData({
                                ...formData,
                                logradouro: e.target.value
                            })
                        }} className="in" />
                        <label htmlFor="in">Logradouro:</label>
                    </span>

                    <span className="p-float-label">
                        <InputText onChange={(e) => {
                            setFormData({
                                ...formData,
                                numero: e.target.value
                            })
                        }} className="in" />
                        <label htmlFor="in">Número:</label>
                    </span>

                    <span className="p-float-label">
                        <InputMask value={formData.cep} onChange={(e) => {
                            setFormData({
                                ...formData,
                                cep: e.target.value
                            })
                            console.log('formData', formData)
                        }}
                            onBlur={() => {
                                postData()
                            }}
                            mask="99999-999" className="in"></InputMask>
                        <label htmlFor="in">CEP:</label>
                    </span>

                    <Dropdown id="drop" value={Categoria} options={Categorias}
                        placeholder="Categoria de Leitor" />

                </div>
                <div className='buttonCadastrarContainer'>
                    <Button name="CADASTRAR"></Button>
                </div>
                <div className='buttonVoltarContainer'>
                    <Button name="VOLTAR"></Button>
                </div>
            </S.CenterContainer>

        </S.Container>


    )

}

export default CadastroUsuario;