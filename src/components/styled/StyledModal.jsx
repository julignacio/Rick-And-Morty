import styled from 'styled-components';

export const StyledModal = styled.div`
  display: none;
  position: absolute;
  top: 20vh;
  left: 20vw;
  width: 60%;
  max-height: 70%;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: rgba(98, 164, 171, .3) rgba(98, 164, 171, 0);
  background-color: rgb(80, 80, 80);
  color: #fff;
  opacity: 90%;
  border-radius: 5px;
  transition: opacity 500ms ease;

  &:hover {
    opacity: 100%;
  }
`;
