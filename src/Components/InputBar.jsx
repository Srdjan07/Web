import React from 'react';
import styled from 'styled-components';


const InputBox = styled.input`
    width: 200px;
    height: 20px;
    margin-left: 23%;
    border-bottom-color: #a22e22;
    margin-top: 20px;
    transform: skew(10deg);
    z-index: 1;
`;
export default class UserLoginBox extends React.Component {

    render() {
        return <InputBox placeholder={this.props.holder} onChange={(event) => { this.props.setValue(event.target.value) }} />;
    }
}