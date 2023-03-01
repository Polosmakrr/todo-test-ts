import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  display: grid;
  width: 100vw;
  height: 100vh;
  place-items: center;
  background-color: rgba(33, 33, 33, 0.12);
  pointer-events: all;
`;

export const ModalViev = styled.div`
  padding: 20px;
  background-color: #ffffff;
  width: 40%;
  height: 40%;
  overflow-x: hidden;
  overflow-y: auto;

  //   @media screen and (min-width: 767px) {
  //     width: 50%;
  //     height: 50%;
  //     flex-direction: column;
  //     align-items: center;
  //   } ;
`;

export const Close = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;

  &:hover {
    transform: scale(1.3);
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
