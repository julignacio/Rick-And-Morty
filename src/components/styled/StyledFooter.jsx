import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: auto;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgb(35, 35, 35);

  .footerContent {
    padding: 1rem;
    color: rgba(2, 177, 200, .5);
    font-weight: 400;
  }

  .developed {
    color: rgba(2, 177, 200, 1);
    font-weight: 800;
  }
`;
