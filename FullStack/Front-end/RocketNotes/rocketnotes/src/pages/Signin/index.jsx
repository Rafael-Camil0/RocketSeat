import {Container,Form,Background} from "./styles"
import {Input} from '../../components/Input'
import {FiLogIn,FiMail,FiLock} from 'react-icons/fi'
import {Button} from '../../components/Button'

export function Signin(){
    return(
        <Container>
             <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus itens úteis</p>
                <h2>Faça seu login</h2>
                <Input
                placeholder = "email"
                type = "text"
                icon ={FiMail}
                >
                </Input>
                <Input
                placeholder = "senha"
                type = "password"
                icon ={FiLock}
                >
                </Input>
                <Button title = "Entrar"/>
                <a href="#">criar conta</a>
             </Form>
             <Background/>
        </Container>
    )
}