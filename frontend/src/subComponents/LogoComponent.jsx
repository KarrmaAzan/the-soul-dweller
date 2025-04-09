import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'




const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
@media (max-width: 320px) {
   left: 1rem;
   margin: -2px
  
}
`

const LogoComponent = (props) => {
    return (
      <Link to="/">
        <Logo color={props.theme}>
          JG
        </Logo>
        </Link>
    )
}

export default LogoComponent
