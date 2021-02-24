import styled from 'styled-components';

export const StyledInicio = styled.div`

    background-color: rgb(36, 40, 47);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(38,115,115);
    background: linear-gradient(90deg, rgba(38,115,115,0.9248074229691877) 0%, rgba(15,48,48,0.896796218487395) 49%, rgba(6,18,18,1) 100%);


    .title{
        color: white;
        font-size: 55px;
        text-shadow: 7px 7px 10px  #639786;
        text-align: center;
    }

    .cards{
        margin: 0 10px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        width: 100%;
        margin-bottom: 100px;
    }

    .loading {
      display: block;
    }

    @media (max-width: 650px) {

        .title{
            font-size: 5vh;
            width: 90%;
        }

    }
`;
