import {FiPlus,FiSearch} from 'react-icons/fi'
import {Container,Brand,Menu,Search,Content,NewNote}from './styles'
import {Input} from '../../components/Input'
import {Note} from '../../components/Note'
import {Header} from '../../components/Header'
import {ButtonText} from '../../components/ButtonText'
import {Section} from '../../components/Section'
export function Home(){
    return(
    <Container>
        <Brand>
        <h1>RocketNotes</h1>
        </Brand>

        <Header/>

        <Menu>
        <li> <ButtonText title="Todos"/></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="NodeJS"/></li>

        </Menu>

        <Search>
        <Input icon = {FiSearch} placeholder = "Pesqusar pelo título"/>
        </Search>
        <Content>
            <Section title="Minhas notas">
                <Note data={{title:"React",
                    tags:[
                        {id:"1",name:'react' },
                        {id:"2",name:'react' }

                    ]
                    }}/>
            </Section>
        </Content>

        <NewNote>

        <FiPlus/>
        Criar nota

        </NewNote>
    </Container>
    )
}