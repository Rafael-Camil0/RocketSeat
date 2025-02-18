import {Container,Form,Background} from "./styles"
import {Input} from '../../components/Input'
import {FiUser,FiMail,FiLock} from 'react-icons/fi'
import {Button} from '../../components/Button'

export function SignUp(){
    return(
        <Container>
                <Background/>
             <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus itens úteis</p>
                <h2>Crie sua conta</h2>
                <Input
                placeholder = "Nome"
                type = "text"
                icon ={FiUser}
                />
                <Input
                placeholder = "email"
                type = "text"
                icon ={FiMail}
                />
        
                <Input
                placeholder = "senha"
                type = "password"
                icon ={FiLock}
                />
                
                <Button title = "Cadastrar"/>
                <a href="#">Voltar ao Login</a>
             </Form>
         
        </Container>
    )
}