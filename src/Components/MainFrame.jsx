import React from 'react';
import styled from "styled-components";
import { RightSideBanner, LeftSideBanner } from '../Components/SideBanner';
import FrontPageComponent from '../Components/ProductPageComponent';
import MainNavigation from '../Components/MainNavigation';


const BackgroundDivComponent = styled.div`
    background-image: ${props => props.backgroundImage ? "url(" + props.backgroundImage + ")" : "No Image available"};
    height: 1200px;
    background-size: cover;

`;

export default class MainFrameDiv extends React.Component {

    render() {
        console.log(this.props)
        return (<BackgroundDivComponent backgroundImage={this.props.backgroundImage}>
            <MainNavigation />
            <LeftSideBanner />
            <RightSideBanner />
            <FrontPageComponent cpu={this.props.cpu}/>
        </BackgroundDivComponent>
        );
    }
}