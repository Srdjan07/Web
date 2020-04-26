import React from 'react';
import styled from 'styled-components';
import SearchInputBar from '../AdminComponents/SearchInputComponent';

const RightPosition = styled.div`
    width: 300px;
    height: 90%;
    background-color: #cecece;
    top: 80px;
    position: relative;
    margin-left: 50px;
`;

export default class RightSide extends React.Component {

    render() {
        console.log("props")
        console.log(this.props)
        return <RightPosition >

            <SearchInputBar changeSearchText={this.props.searchValueFetch}></SearchInputBar>
        </RightPosition>
    }
}

