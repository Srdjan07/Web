import React from 'react';
import styled from "styled-components";
import SubElementDiv from '../ComponentElements/MainDivSubElement';

const SpaceDiv = styled.div`
    width:100%;
    height: 10px;
`;
const ElementWrapper = styled.div`
    width: 100%;
    height: 100%;
`;


export default class MainDivList extends React.Component {

    render() {
        return (<ElementWrapper>
            <SpaceDiv />
            <SubElementDiv />
        </ElementWrapper>
        );
    }
}
