import React from "react";
import { Container, TextInput, Title } from "./styles";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps { }

const Input: React.FC<InputProps> = ({children, ...props}) => {
    return (
        <Container>
            <Title>{children}</Title>
            <TextInput{...props}></TextInput>
        </Container>
    );
}

export default Input;