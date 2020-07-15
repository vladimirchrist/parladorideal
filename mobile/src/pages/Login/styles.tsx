import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  margin-top: ${Constants.statusBarHeight + 20}px;
`;

export const Greeting = styled.Text`
  margin-vertical: 20px;
  align-self: center;
  font-size: 35px;
`;

export const Form = styled.View`
  margin-top: 35px;
  margin-horizontal: 35px;
`;
