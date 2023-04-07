import styled from "@emotion/styled";

export const CardContainer = styled.div`
    outline: 15px solid #000000;
    margin: 70px;
    width: 375px;
    height: 515px;
    border: 15px solid var(--background-style);
    background-color: var(--background-style);
    border-bottom: none;
    border-radius: 5% 5% 3% 3%;
`

export const ContentContainer = styled.div`
    width: 360px;
    height: 505px;
    border: 5px solid #d4b864;
    border-radius: 5px;
    background-color: #faf1d6;
`

export const TextBar = styled.h4`
    margin-top: 0px;
    margin-bottom: 5px;
    height: 24px;
    width: 350px;
    padding-top: 5px;
    padding-left: 7px;
    border: 2px solid black;
    border-radius: 25px;
    background-color: #d4b864;
    box-shadow: 0px 0px 6px 4px #8a7136;
`

export const ImageWrapper = styled.div`
    width: 349px;
    height: 245px;
    border: 2px solid #000000;
    border-top: none;
    /* box-shadow: 3px 3px 6px 5px #776438; */
    margin-left: 5px;
    box-shadow: 0px 5px 2px 4px #8a7136;
`

export const Oracle = styled.p`
    
    padding-left: 5px;
    height: max-content;
`

export const Flavor = styled.p`
    padding-left: 5px;
    font-style: italic;
    height: max-content;
`

export const Artist = styled.h5`
    padding: 5px;
`

export const Stats = styled.div`
    height: 35px;
    width: 70px;
    border: 3px solid #d4b864;
    border-radius: 18px;
    box-shadow: 0px 1px 2px 5px #8a7136;
    position: relative;
    top: -45px;
    left: 275px;
    padding-top: 7px;
    text-align: center;
    font-weight: bolder;
    font-size: 18pt;
    background-color: #8a7136;
`

export const Image = styled.img`
    width: 350px;
    height: 245px;
`