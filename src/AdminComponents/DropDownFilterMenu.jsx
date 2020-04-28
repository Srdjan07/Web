import React from 'react';
import styled from "styled-components";
import './react-transition-group.css';

const Wrapper = styled.div`
    width: 100%;
`;
const DropFilterMenu = styled.div`
    width: 100%;
    height: 30px;
    border-bottom-style: solid;
    border-width: 1px;
    border-color: grey;
    text-align: center;
`;
const FilterDiv = styled.div`
    width: 100%;
    height: 100px;
    display: inline-block;
    border-bottom-style: solid;
    border-width: 1px;
`;
const FilterDivLabel = styled.label`
    width: 100%;
    height: 30px;
    user-select: none;
    cursor: pointer;
`;

export default class FilterMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clickedOn: false,
        }
    }
    isFilterDivActive = () => {

        if (this.state.clickedOn) {
            this.setState({ clickedOn: false });
        }
        else {
            this.setState({ clickedOn: true });
        }
    }

    render() {
        return (<Wrapper>
            <DropFilterMenu onClick={this.isFilterDivActive} >
                <FilterDivLabel>{this.props.dropMenuName}</FilterDivLabel>
            </DropFilterMenu>
            {this.state.clickedOn ? <FilterDiv className="react-transition-group" >
                {this.props.checkBoxes}
            </FilterDiv> : null}
        </Wrapper>
        );
    }
}