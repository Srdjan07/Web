import React from 'react';
import styled from "styled-components";
import LeftControlls from '../AdminComponents/LeftSideControlls';
import NavTab from '../Components/MainNavigation';
import FrontContainer from '../AdminComponents/AdminFrontPage';
import RightSide from '../AdminComponents/RightSide';
import backgroundWP from '../Images/adminBackground.jpg';
import ProductPane, { TopMainPageBanner } from '../Components/ProductHomepage';
import axios from 'axios';


const Wrapper = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
`;
const Container = styled.div`
    display:flex;
    height: 90%;
`;
var Background = {
    height: "1200px",
    backgroundSize: "cover",
    backgroundImage: "url(" + backgroundWP + ")",
};


export default class Admins extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cpuSwitch: false,
            gpuSwitch: false,
            ramSwitch: false,
            storageSwitch: false,
            sliderValueMin: 0,
            sliderValueMax: 0,
            textValueFromSearch: "",
        }
    }

    onChangeFavorite = (value, key) => {
        let state = this.state;
        state[key] = value;
        this.setState(state);
    };
    priceRange = (value, key) => {
        let state = this.state;
        state[key] = value;
        this.setState(state);
    }
    sliderValueOnChange = (inputValueMax, inputValueMin) => {
        this.setState({ sliderValueMin: inputValueMin, sliderValueMax: inputValueMax })
    }
    textSearchSet = (text) => {
        this.setState({ textValueFromSearch: text })

    }

    // UNSAFE_componentWillMount() {
    //     this.AdminPageFetch();
    // }
    AdminPageFetch = () => {
        axios.get(`http://localhost:9000/adminproductlist?
                                    cpuCheckbox=${this.state.cpuSwitch}
                                    &gpuCheckbox=${this.state.gpuSwitch}
                                    &ramCheckbox=${this.state.ramSwitch}
                                    &storageCheckbox=${this.state.storageSwitch}
                                    &SValueMin=${this.state.sliderValueMin}
                                    &SValueMax=${this.state.sliderValueMax}`, {
            headers: { 'Access-Control-Allow-Origin': '*' }
        })
            .then(response => this.setState({ cpu: response.data }))
            .catch((error) => {
                console.error('Error:', error);
            });
    };



    render() {
        console.log(this.state.textValueFromSearch)
        return <Wrapper style={Background}>
            <NavTab />
            <Container>
                <LeftControlls
                    changeCpu={() => this.setState({ cpuSwitch: !this.state.cpuSwitch })}
                    changeGpu={() => this.setState({ gpuSwitch: !this.state.gpuSwitch })}
                    changeRam={() => this.setState({ ramSwitch: !this.state.ramSwitch })}
                    changeStorage={() => this.setState({ storageSwitch: !this.state.storageSwitch })}
                    cpu={this.state.cpuSwitch}
                    gpu={this.state.gpuSwitch}
                    ram={this.state.ramSwitch}
                    storage={this.state.storageSwitch}
                    onChangeFavorite={this.onChangeFavorite}
                    priceRange={this.priceRange}
                    changedValueSlider={this.sliderValueOnChange}
                />
                <FrontContainer>
                    <TopMainPageBanner />
                    <ProductPane />
                </FrontContainer>
                <RightSide
                    searchValueFetch={this.textSearchSet} />
            </Container>
        </Wrapper>
    }
}