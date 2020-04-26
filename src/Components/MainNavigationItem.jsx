import React from 'react';
import styled from "styled-components";

const Dropdown = styled.div`
    width:150px;
    height:300px;
    background-color: white;
    position: absolute;
    top: 55px;
    z-index: 1000;
`;

const LiButton = styled.div`
    width:150px;
    height:30px;
    opacity: 1;
    background-color: white;
    display: flex;
    font-size: 20px;
    text-align: center;
    font-style: italic;
    cursor: pointer;
    border-bottom: inset;
    border-bottom-color: #479447;
    flex-direction: column;
    :hover {
        color: #ed1212;
    }
`;
const ButtonWrapper = styled.div`
    margin-right: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100px;
    z-index:1000;
`;
const DropMenuListContainer = styled.ul`
    margin-left: -35px;
`;
const DropMenuList = styled.li`
    list-style-type: none;
    margin-top: 10px;
    border-bottom: inset;
    border-bottom-color: #479447;
    :hover {
        cursor: pointer;
    }
`;
const InnerLink = styled.a`

    color: black;
    text-decoration:none;
    :hover {
        color: darkcyan;
    }
`;

export default class NavItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isButtonHovered: false,
            isDropdownHovered: false
        };
    }

    setIsButtonHovered = (newVal) => {
        this.setState({ isButtonHovered: newVal });
    };

    setIsDropdownHovered = (newVal) => {
        this.setState({ isDropdownHovered: newVal });
    };

    render() {
        const { items } = this.props;
        return (
            <ButtonWrapper>
                <LiButton onMouseEnter={() => this.setIsButtonHovered(true)} onMouseLeave={() => this.setIsButtonHovered(false)}> {this.props.children}</LiButton>
                {(this.state.isButtonHovered || this.state.isDropdownHovered) &&
                    <Dropdown onMouseEnter={() => this.setIsDropdownHovered(true)} onMouseLeave={() => this.setIsDropdownHovered(false)}>
                        <DropMenuListContainer>
                            {
                                items.map((item) => {
                                    console.log(item.link);
                                    return <DropMenuList key={item.title} ><InnerLink href={item.link}>{item.title}</InnerLink></DropMenuList>
                                })
                            }
                        </DropMenuListContainer>
                    </Dropdown>}
            </ButtonWrapper>
        );
    }
}
