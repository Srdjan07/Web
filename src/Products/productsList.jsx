import React from 'react';
import styled from 'styled-components';

const HoldingComponent = styled.div`
    width: 100%;
    height: 100%;
    background: red;
    overflow:auto;
`;
const OneItem = styled.div`
    width: 100%;
    height: 25%;
    background: green;
`;


export default class RightSideListingCOmponent extends React.Component {

    constructor(props) {
        this.state = {
            responseList: "",
        }
    }
    UNSAFE_componentWillMount() {
        AdminPageFetch();
    }
    AdminPageFetch = () => {
        axios.get(`http://localhost:9000/productrandomlist`, {
            headers: { 'Access-Control-Allow-Origin': '*' }
        })
            .then(response => this.setState({ responseList: response.data }))
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    render() {
        return (<HoldingComponent>
            {this.state.responseList.map((responseList) => {responseList.gpu.name && <OneItem> </OneItem> })}
        </HoldingComponent>
        );
    }
}