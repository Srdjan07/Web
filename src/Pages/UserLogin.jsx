import React from 'react';
import styled from "styled-components";
import InputBar from '../Components/InputBar';
import SubmitButton from '../Components/RegisterAndLoginButton';
import axios from 'axios';

const BackgroundSide = styled.div`
    height: 100%;
    background-color: #757070;
    position: absolute;
    width: 100%;
`;
const LinkWrapper = styled.div`
    margin-top: 30px;
    text-align: center;
`;
const LoginWrapper = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 50px;
    background-color: white;
    border-style: double;
    border-color: orange;
    margin-left: 40%;
    margin-top: 5%;
`;
const RegisterLink = styled.a`
    text-decoration:none;
    margin-top: 100px;
`;

export default class UserLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            username2: "",
            id: "",
        }
    }
    login = () => {
        if (!this.state.username || this.state.password) {

        }
        axios.post('http://localhost:9000/login', { username: this.state.username, password: this.state.password /*, jwt: getCookie('authCookie')*/ })
            .then((response) => this.setState({ username2: response.data.username, id: response.data.id }))
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    render() {
        return (
            <BackgroundSide>
                <LoginWrapper>
                    <InputBar holder={"Username"} setValue={(newVal) => { this.setState({ username: newVal }) }} />
                    <InputBar holder={"Password"} setValue={(newVal) => { this.setState({ password: newVal }) }} />
                    <SubmitButton onClick={this.login}> Login </SubmitButton>
                    <LinkWrapper>
                        <RegisterLink href="/register"> Not registrated? </RegisterLink>
                    </LinkWrapper>
                    <LinkWrapper>
                        <RegisterLink href="/"> Forgot password </RegisterLink>
                    </LinkWrapper>
                </LoginWrapper>
            </BackgroundSide>
        );
    }
}