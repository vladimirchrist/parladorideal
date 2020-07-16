import React, { useState, useEffect } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

import { Button } from "../../components";
import {
  Container,
  CharactersRemaining,
  Header,
  HeaderTitle,
  HeaderButton,
  PostForm,
  TextInput,
} from "./style";
import api from "../../services/api";
import { AppStackParamList } from "../../routes/app.routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { useAuth } from "../../hooks/auth";

export type PostRouteProp = RouteProp<AppStackParamList, 'Post'>
export type PostNavigationProp = StackNavigationProp<AppStackParamList, 'Post'>

const Post = () => {
  const navigation = useNavigation();
  const route = useRoute<PostRouteProp>();
  const [text, setText] = useState<string>("");
  const [remaining, setRemaining] = useState(280);
  const { user } = useAuth();

  const setTextAndRamaining = (text: string) => {
    setText(text);
    const length = text.length;
    setRemaining(280 - length);
  };

  const postToEdit = route.params?.post;

  const save = () => {
      if(!postToEdit){
          post()
      } else {
          edit(postToEdit.id)
      }
  }

  const post = async () => {   
    api.post("post", { message: text, userId: user.id })
      .then(() => navigation.navigate("Home"));
  };

  const edit = async (id: string) => {
    api.patch("post", { message: text, id: id })
      .then(() => navigation.navigate("Home"));
  };

useEffect(() => {
    if(postToEdit) {
        setTextAndRamaining(postToEdit.message);
    }
},[])

  return (
    <Container>
      <Header>
        <HeaderTitle>Criar Post</HeaderTitle>
        <HeaderButton>
          <Button onPress={() => save() }>Postar</Button>
        </HeaderButton>
      </Header>

      <PostForm>
        <TextInput
          multiline={true}
          numberOfLines={4}
          value={text}
          onChangeText={(text) => setTextAndRamaining(text)}
        ></TextInput>
        <CharactersRemaining>{remaining} restantes</CharactersRemaining>
      </PostForm>
    </Container>
  );
};

export default Post;
