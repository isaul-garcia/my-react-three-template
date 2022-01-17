import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }    

    body {
        background-color: #2e44e0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-overflow-scrolling: auto;
        font-family: "Arial", sans-serif;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }
`

export const PlaceContainer = styled.div`
    width: 100vw;
    height: 100vh;
    border: 1px #aaa solid;
    cursor: pointer;
`

export const PlaceWrapper = styled.div`
    width: 100%;
    height: 100%;
`

export default GlobalStyle;