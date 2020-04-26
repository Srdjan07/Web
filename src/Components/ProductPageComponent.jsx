import React from 'react';
import styled from "styled-components";
import ProductPage from '../Components/ProductHomepage';

const FrontDiv = styled.div`
    width: 1065px;
    height 1000px;
    background: red;
    margin-left: 420px;
    // position: relative;
    // left: 420px;
    margin-top: 40px;
    display: inline-blocks;
    border-radius: 10px;
`;
export default class ListingComponents extends React.Component {

    render() {
        console.log(this.props.cpu)
        return <FrontDiv>
            {this.props.cpu && this.props.cpu.map((cpu, index) => {
                return <ProductPage key={cpu.id} name={cpu.name} cores={cpu.cores} speed={cpu.speed} lithography={cpu.lithography} connection={cpu.connection}
                capacity={cpu.capacity} type={ cpu.type} item={cpu.item} />
            }
            )}
        </FrontDiv>
    }
}