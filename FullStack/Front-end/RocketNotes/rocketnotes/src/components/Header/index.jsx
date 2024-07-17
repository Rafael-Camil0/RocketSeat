import { Container,Profile,Logout } from "./styles";
import{RiShutDownLine}from "react-icons/ri"

export function Header(){
    return <Container>
            <Profile>
                <img src="https://github.com/rafael-co.png" alt="" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Rafael Camilo</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
           </Container>
}