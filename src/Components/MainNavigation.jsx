import React from 'react';
import styled from "styled-components";
import MainNavigationItem from '../Components/MainNavigationItem';
import mainNavigationItems from './main.json';
import LogoImage from '../Images/LogoResized.png';

var LogoImg = {
    height: "60px",
    width: "100px",
    backgroundImage: "url(" + LogoImage + ")",
};
const TopDiv = styled.div`
    width:${ props => props.sirina ? props.sirina : "auto"};
    height:80px;
    background-color: #2D312D;
    opacity: 0.6;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    z-index: 1000;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    @media screen and (min-width: 768px) {
        width: 768px;
    }
    @media screen and (min-width: 1032px) {
        width: 1032px;
    }
`;
const NavigationLink = styled.a`
    margin-top: 6px;
    margin-left: 15px;
    color: white;
`;
const HomepageLogo = styled.div`
    width: 60px;
    height: 60px;
    position: absolute;
    left: 80px;
    top 10px;
`;

export default class MainNav extends React.Component {
    render() {
        return (
            <div>
                <a href="/"> <HomepageLogo style={LogoImg}> </HomepageLogo></a>
                <TopDiv sirina={this.props.sirina}>
                    {
                        mainNavigationItems.map((item) => {
                            return <MainNavigationItem key={item.title} items={item.subitems}>{item.title} </MainNavigationItem>;
                        })
                    }
                    <NavigationLink href="/login">Login</NavigationLink>
                    <NavigationLink href="/register">Register</NavigationLink>
                </TopDiv>
            </div>
        );
    }
}