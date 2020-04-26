import React from 'react';
import styled from 'styled-components';

const Submit = styled.button`
    width:70px;
    height: 30px;
    margin-left: 154px;
    margin-top: 20px;
`;
export default class RALButton extends React.Component {

    render() {
        return <Submit onClick={this.props.onClick} > {this.props.children}</Submit>;
    }
}