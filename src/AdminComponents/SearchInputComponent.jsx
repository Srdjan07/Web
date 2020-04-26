import React from 'react';
import styled from "styled-components";

const Search = styled.div`
    height: 35px;
    border-style: 
    border-style: none;
`;
const InputSearch = styled.input`
    height: inherit;
    width: 236px;
    border-style: none;
`;
const SearchButton = styled.button`
    height: 37px;
    width: 64px;
    border-style: none;
    outline: none !important;
    border-left-style: ridge;
    user-select: none;
    background-color:${props => props.buttonColorOnClick}
`;


export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            defaultButtonColor: "white",
        };
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    onClickSearch = () => {
        this.setState({ value: "" })
        console.log("Clicked !");
    }
    colorChangeOnButtonClick = () => {

        this.state.defaultButtonColor === "white" ? this.setState({ defaultButtonColor: "green" }) : this.setState({ defaultButtonColor: "white" });
        console.log(this.state.defaultButtonColor);

        setTimeout(() => {
            this.setState({ defaultButtonColor: "white" });
        }, 500)
    }
    render() {
        console.log(this.state.value)

        const { changeSearchText } = this.props;
        return <Search>
            <InputSearch value={this.state.value} onChange={this.handleChange} placeholder="  Search..." />
            <SearchButton onClick={() => {
                this.onClickSearch(this.state.value);
                this.colorChangeOnButtonClick();
                changeSearchText(this.state.value);
            }} buttonColorOnClick={this.state.defaultButtonColor} >Search</SearchButton>
        </Search>
    }

}