import styled from 'styled-components';

export const StyledLocations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
    height: 30vh;
  }

  .title {
    text-align: center;
    margin-bottom: 1rem;
  }

  .card__container {
    background: transparent;
    width: 100%;
    margin-top: 2rem;
  }

  .buttons {
    width: 100%;
    display: flex;
    margin-bottom: 108px;
  }

  .backPage, .nextPage {
    display: none;
    width: 100%;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    border: 1px solid black;
    padding: 3px 0;
    background-color: rgba(2, 177, 200, .7);

    &:hover {
      background-color: rgba(2, 177, 200, 1);
    }
  }

  .card__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .miniCard {
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    width: 30%;
    height: auto;
    color: white;
    box-shadow: 5px 5px 10px black;

    &:hover{
        transform: scale(1.02);
    }

    h2, h5 {
      margin: 0;
      padding: 1rem;
    }

    h5 {
      color: rgba(2, 177, 200, 1);
    }
  }

  #modalResidents {
    max-height: 90vh;
    z-index: 3;
  }

  @media screen and (max-width: 550px) {
    .location__card {
      width: 45%;
    }
  }
`;
