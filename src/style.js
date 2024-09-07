import styled from 'styled-components';

//Esse container vai envolver toda a aplicacao
//100vh é para pegar a tela toda
export const Container= styled.div`
width: 100%;
height: 100vh;
background-color: #CACACA;
display: flex;
align-items: center;
justify-content: center;
`
export const Content= styled.div `
background-color:#ffffff;
width:50%;

`

export const Row = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const Column = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`