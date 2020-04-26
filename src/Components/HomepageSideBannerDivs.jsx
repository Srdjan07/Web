import React from 'react';
import styled from "styled-components";

const OneContainer = styled.div`
    

`;
const VideoCon = styled.iframe`


`;

export default class SideBanner extends React.Component {

    render() {
        return (
            <OneContainer >
                <VideoCon src={this.props.LinkedVid} allow={this.props.VidSettings} />
            </OneContainer>
        );
    }

}





