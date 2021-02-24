import styled from 'styled-components';


export const StyledCard = styled.div`

    margin: 50px auto;

    display: flex;
    /* flex-shrink: 0; */
    /* align-items: center; */
    /* justify-content: center; */

    /* background-color: #534f4f; */

    border-radius: 10px;
    overflow: hidden;
    width: 480px;
    height: 200px;
    box-shadow: 5px 5px 10px black;
    transition: transform 250ms ease;

    &:hover{
        transform: scale(1.02);
    }

    .contImg{
        margin-right: 10px;
        width: 45%;
        height: 100%;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

    }

    .info{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        /* font-size: 12px;  */
        /* margin-bottom: 10px; */
        width: 55%;
        height: 100%;

        p{
            font-size: 15px;
        }

        .status{
            display: flex;
            align-items: center;
            font-size: 14px;

        }

        .status__icon{
            height: 0.5rem;
            width: 0.5rem;
            margin-right: 0.375rem;
            background-color: ${props => props.status === 'Dead' ? 'rgb(214, 61, 46)' : props.status === 'unknown' ? 'rgb(158, 158, 158)' : 'rgb(85, 204, 68)' };
            border-radius: 50%;
        }
    }




    @media (max-width: 650px) {
        /* margin: 50px auto; */
        /* display: flex; */
        flex-direction: column;
        width: 90%;
        height: 520px;

        .contImg {
          width: 100%;
          max-height: 50%;
        }

        .info{
            /* margin: 15px; */
            padding: 0 15px;
            width: 100%;
            /* display: flex; */
            /* flex-direction: column; */
            /* justify-content: space-between; */
            /* height: 50%; */

            h2{
                font-size: 30px;
            }

            h5{
                font-size: 17px;
            }

            p{
                font-size: 19px;
            }

            .status{
                font-size: 18px;
            }

        }

        /* img{
            width: 100%;
            height: 100%;
        } */

    }



`;
