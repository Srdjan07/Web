import React from 'react';
import styled from 'styled-components';
import InputBar from '../Components/InputBar';
import SubmitButton from '../Components/RegisterAndLoginButton';

const BackgroundSide = styled.div`
    height: 100%;
    background-color: #757070;
    position: absolute;
    width: 100%;
`;
const LinkWrapper = styled.div`
    margin-top: 30px;
    text-align: center;
    margin-left: -20px;
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

export default class UserRegister extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",

        }
    }
    register = () => {
        fetch('http://localhost:9000/register', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: this.state.username, password: this.state.password, email: this.state.email }),
        })
            .then((response) => { console.log(response.text) })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    render() {
        console.log(this.state);

        return (
            <BackgroundSide>
                <LoginWrapper>
                    <InputBar holder={"Username"} setValue={(newVal) => { this.setState({ username: newVal }) }} />
                    <InputBar holder={"Password"} setValue={(newVal) => { this.setState({ password: newVal }) }} />
                    <InputBar holder={"Email"} setValue={(newVal) => { this.setState({ email: newVal }) }} />
                    <SubmitButton onClick={this.register}> Register </SubmitButton>
                    <LinkWrapper>
                        <RegisterLink href="/login"> Login </RegisterLink>
                    </LinkWrapper>
                    <LinkWrapper>
                        <RegisterLink href="/"> Help </RegisterLink>
                    </LinkWrapper>
                </LoginWrapper>
            </BackgroundSide>
        );
    }

}