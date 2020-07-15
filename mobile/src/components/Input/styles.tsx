import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


export const Container = styled.View`
    margin-bottom: 32px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.lightGray};
    font-size: 10px;
    text-transform: uppercase;
`;

export const TextInput = styled.TextInput`
    border-bottom-color: ${({theme}) => theme.colors.lightGray};
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    height: 45px;
    font-size: 15px;
`;