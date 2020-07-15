import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  padding-horizontal: 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  height: 100%;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
    font-size: 30px;
    align-self: center;
`;

export const HeaderButton = styled.View`
    width: 80px;
`;

export const PostForm = styled.View`
    margin-top: 40px;
    border: ${StyleSheet.hairlineWidth}px;
    border-radius: 10px;
`;

export const TextInput = styled.TextInput`
    padding-horizontal: 10px;
    padding-vertical: 10px;

    font-size: 20px;
`;

export const CharactersRemaining = styled.Text`
    font-size: 10px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.lightGray};
    align-self: flex-end;
    margin-right: 10px;
`;
