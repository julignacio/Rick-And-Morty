import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body, .nav, .footer {
      background-color: ${props => props.dark ? 'black' : 'rgb(35, 35, 35)'};

    }

    .miniCard {
      background-color: ${props => props.dark ? '#1c1c1c' : '#207559'};
      color: ${props => props.dark ? '#737373' : '#fff'};

      h2 {
      color: ${props => props.dark ? '#737373' : '#fff'};
      }
    }

    .card {
      background-color: ${props => props.dark ? '#1c1c1c' : '#207559'};
      color: ${props => props.dark ? '#737373' : '#fff'};

      h2 {
      color: ${props => props.dark ? '#737373' : '#fff'};
      }
    }

    .card__container {
      background-color: ${props => props.dark ? 'black' : 'rgb(35, 35, 35)'};
    }

    .top {
      background-color: ${props => props.dark ? 'rgb(45, 45, 45)' : '#fff'};
      color: ${props => props.dark ? '#737373' : 'black'};
    }
`;

export default GlobalStyle;
