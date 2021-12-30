import { InputText } from 'primereact/inputtext';
import Header from '../../components/Header';
import * as S from './styles';



function CadastroUsuario(){
    return(
        <S.Container>
            
            <div className="div-grid">
                <div className="div-coluna">
                    <label htmlFor="nome-completo">Nome Completo</label>
                    <InputText id="firstname2" type="text"/>
                    <label htmlFor="lastname2">E-mail</label>
                    <InputText id="lastname2" type="text"/>
                    <label htmlFor="lastname2">CPF</label>
                    <InputText id="lastname2" type="text"/>
                    <label htmlFor="lastname2">Telefone</label>
                    <InputText id="lastname2" type="text"/>
                    <label htmlFor="lastname2">Data Nascimento</label>
                    <InputText id="lastname2" type="text"/>
                    <label htmlFor="lastname2">Endereço</label>
                    <InputText id="lastname2" type="text"/>
                    <label htmlFor="lastname2">Categoria Leitor</label>
                    <InputText id="lastname2" type="text"/>
                    
                    
                </div>
                
            </div>
            
        </S.Container>
            
        
    )
    
}

export default CadastroUsuario;