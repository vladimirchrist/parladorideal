import { StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import styled from "styled-components/native";

export const HomeContainer = styled.View`
  padding-horizontal: 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  height: 100%;
`;

export const HomeHeader = styled.View`
  padding-horizontal: 24px;
  margin-bottom: 15px;
`;

export const HeaderTitle = styled.Text`
  align-self: center;
  padding-horizontal: 24px;
  font-weight: 600;
  font-size: 30px;
`;

export const PostContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const PostHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 25px;
`;

export const PostUsername = styled.Text`
  font-weight: 600;
  font-size: 20px;
`;

export const PostDate = styled.Text`
  align-self: center;
  font-weight: 400;
  font-size: 12px;
  bottom: 0px;
`;

export const Actions = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled(TouchableOpacity)`
  margin-left: 15px;
`;

export const PostMessage = styled.Text`
  margin-vertical: 10px;
  padding-horizontal: 10px;
`;

export const Divider = styled.View`
  border-bottom-color: ${({ theme }) => theme.colors.lightGray};
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;
export const PostFooter = styled.View`
  background-color: aqua;
  border-radius: 50px;
  height: 80px;
  width: 80px;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const PostFooterItem = styled.View``;
