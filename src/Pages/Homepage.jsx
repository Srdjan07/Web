import React, { Component } from 'react';
import styled from "styled-components";
import BackgroundImg from '../Images/Background.png';
import TopMainNavigation from '../Components/MainNavigation';
import SideContent from '../Components/HomepageSideBannerDivs';
import ProductPane, { TopMainPageBanner } from '../Components/ProductHomepage';
import Axios from 'axios';


var BackgroundIMG = {
    height: "1200px",
    backgroundSize: "cover",
    backgroundImage: "url(" + BackgroundImg + ")",
};

const BackgroundDiv = styled.div`
    width: "100%",
    height: "700px"
    background-color: #0BE20B;
`;

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
    margin-right: 40px;
    width: 330px;
    height: 90%;
    display:inline-block;
    opacity: 0.3;
    position: fixed;
    border-radius: 15px;
`;
const MainPageDiv = styled.div`
    background-color: white;
    margin-left: 23%;
    margin-right: 3%;
    margin-top: 1%;
    width: 55%;
    height: 90%;
    display:inline-block;
    border: 3px solid #F8940C;
    border-radius: 30px;
`;
export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        this.homepageFetch();
    }

    homepageFetch = () => {
        Axios.get('http://localhost:9000/', {
            headers: { 'Access-Control-Allow-Origin': '*' }
        })
            .then(response => this.setState({ products: response.data }))
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    render() {
        return (
            <BackgroundDiv style={BackgroundIMG}>
                <TopMainNavigation sirina={"600px"} />
                <LSideDiv>
                    <SideContent LinkedVid="https://www.youtube.com/embed/IhX0fOUYd8Q" VidSettings="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
                </LSideDiv>
                <MainPageDiv>
                    <TopMainPageBanner />
                    {this.state.products && this.state.products.map(product => {
                        return <ProductPane key={product.id} type={product.type} memory={product.memory} cores={product.cores} lithography={product.lithography} speed={product.speed} item={product.item}></ProductPane>
                    }
                    )}
                </MainPageDiv>
                <RSideDiv />
            </BackgroundDiv>
        );
    }
}
