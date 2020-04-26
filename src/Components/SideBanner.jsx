import React from 'react';
import styled from "styled-components";

const LSideDiv = styled.div`
    background-color: #2D312D;
    margin-left: 40px;
    width: 330px;
    height: 90%;
    display:inline-block;
    opacity: 0.3;
    position: fixed;
    border-radius: 15px;
`;
const RSideDiv = styled.div`
    background-color: #2D312D;
    width: 330px;
    height: 90%;
    display:inline-block;
    opacity: 0.3;
    position: fixed;
    border-radius: 15px;
    right: 40px;
`;

export class RightSideBanner extends React.Component {

    render() {
        return <RSideDiv />
    }
}

export class LeftSideBanner extends React.Component {

    render() {
        return <LSideDiv />
    }
}