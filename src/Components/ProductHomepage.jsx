import React from 'react';
import styled from 'styled-components';
import TestImage from '../Images/ImgGPC.jpg';
const ProductWrap = styled.div`
    width: 100%;
    height: 240px;
    border:gray;
    border-width: 1px;
    border-style: double;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-bottom: 5px;
    display: flex;
`;
const TopBanner = styled.div`
    border-top-left-radius: 30px;
    height: 40px;
    width: 100%;
`;
const ProductImage = styled.img`
    height: 87%;    
    min-width: 215px;
    background: red; 
    margin: 15px;
`;
const ProductName = styled.p`
    margin-left: 100px;
    font-weight: bold;
    font-size: 20px;
    height: 10px;
    width: 300px;
`;
const ProductDescription = styled.div`
    width: 100%;
    height: 100%;
    // background-color: red;
    border-bottom-right-radius: 40px;
    border-top-right-radius: 10px;
`;
const Description = styled.ul`
    margin-top: 20px;
    margin-left: 50px;
    // background-color: green;
    width: 25%;
    display: inline-grid;
`;
const InfoDesc = styled.li`
    margin: 6px;
    border-bottom: 1px;
    list-style-type: none;
`;
const BuyButton = styled.a`
    float: right;
    display: block;
    margin-top: 20px;
    width: 75px;
    height: 25px;
    font-style: italic;
    background-color: #f54e0f;
    text-align: center;
    padding: 15px;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    :hover {
        background-color: green;
    }
`;
const DesciDiv = styled.div`
    display: contents;

`;
const PriceDisplay = styled.span`
    // background-color: blue;
    width: 150px;
    height 40px;
    display: block;
    -webkit-text-stroke: thick;
    text-size: 20px;
`;
const BuyPriceWrapper = styled.div`
    // background-color: black;
    display: flex;
    width: auto;
    display: inline-grid;
    float:right;
    margin-right: 15px;
`;

export default class Products extends React.Component {
    render() {
        const { name, type, id, speed, memory, cores, item, lithography } = this.props;
        return (
            <ProductWrap>
                <ProductImage src={TestImage} alt="Image Not Found" />
                <ProductDescription>
                    <ProductName> {name} Product Name ............... </ProductName>
                    <DesciDiv>
                        <Description>
                            {id && <InfoDesc> Code: {id}</InfoDesc>}
                            {type && <InfoDesc> Type: {type}</InfoDesc>}
                            {memory && <InfoDesc> Memory: {memory}</InfoDesc>}
                            {cores && <InfoDesc> Cores: {cores}</InfoDesc>}
                            {lithography && <InfoDesc> lithography: {lithography}</InfoDesc>}
                            {speed && <InfoDesc> Speed: {speed}</InfoDesc>}
                        </Description>
                    </DesciDiv>
                    <BuyPriceWrapper>
                        <PriceDisplay>{item && item.price}</PriceDisplay>
                        <BuyButton>Buy Now</BuyButton>
                    </BuyPriceWrapper>

                </ProductDescription>
            </ProductWrap>
        );
    }
}

export class TopMainPageBanner extends React.Component {

    render() {
        return (
            <TopBanner />
        );
    }

}
