import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  overflow: hidden;



    .navDiv {
        display: flex;
        justify-content: space-between;
        width: 40%;
    }

    .navLink {
      text-decoration: none;
      font-size: 20px;
      color: rgba(2, 177, 200, .7);

      &:hover {
        color: rgba(2, 177, 200, 1);
      }
    }

    .selected {
      font-size: 25px;
      color: rgba(2, 177, 200, 1);
    }

    .logo {
      max-width: 10%;
      margin-left: .3rem;
    }

    img {
      height: 3rem;
    }

    .divSearch {
      max-width: 15%;
      margin-right: 1.5rem;

    }
    .switchMode {
      position: absolute;
      right: 20px;
      top: 5px;
      display: inline-block;
      width: 35px;
      height: 15px;

      input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #22307d;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 10px;
        border-color: #22307d;

        &:before {
          position: absolute;
          content: "";
          height: 15px;
          width: 15px;
          left: 0px;
          bottom: 0px;
          background-color: white;
          -webkit-transition: .4s;
          transition: .4s;
          border-radius: 50%;
        }
      }

      input:checked + .slider {
        background-color: #cecece;
        border-color: #cecece;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px transparent;
      }

      input:checked + .slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
      }
    }

    .search {
      width: 100%;
      input {
        width: 100%;
      }
    }

    #modalBusqueda {
      width: 80%;
      position: absolute;
      right: 10%;
      left: 10%;
      top: 10vw;
      z-index: 3;
      flex-wrap: wrap;
      justify-content: space-between;

      .cards {
        margin: 0 auto;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .tarjeta {
          margin: 0 auto;
          width: 30%;

          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }

    .dropdown {
      float: left;
      overflow: hidden;
      display: none;
      text-align: right;
    }

    .dropdownMenu {
      font-size: 17px;
      border: none;
      outline: none;
      color: white;
      padding: 14px 16px;
      background-color: inherit;
      font-family: inherit;
      margin: 0;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      top: 3rem;
      right: 0;
      background-color: rgba(35, 35, 35, .9);
      min-width: 20vw;
      min-height: 30vh;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      border-radius: 4px;

      .search {
        min-width: 85%;
      }

      navLink {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
      }
    }



    @media screen and (max-width: 650px) {
      .dropdown {
        display: block;
      }

      .dropdown-content {
        width: 30vw;
        padding-right: 10px;
        padding-bottom: 10px;
      }

      .navDiv {
        display: none;
      }

      .divSearch {
        display: none;
      }

      .navLink {
        font-size: 20px;
      }

      .selected {
        font-size: 22px;
      }
    }

    @media screen and (max-width: 350px) {
      .dropdown-content {
        width: 40vw;
      }
    }
`;
