import styled from 'styled-components';


export const StyledLoader = styled.div`
  width: 10rem;
  height: 10rem;
  z-index: 3;
  margin-top: 2rem;

  img{
    width: 100%;
    height: 100%;
    @keyframes rotate360 {
      to { transform: rotate(360deg); }
    }
    animation: 5s rotate360 infinite linear;
  }
`;
