import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, FlatList, Text } from "react-native";
import api from "../../services/api";
import {
  PostContainer,
  PostUsername,
  PostHeader,
  PostMessage,
  PostDate,
  HomeContainer,
  Divider,
  Actions,
  Icon,
  PostFooter,
  HomeHeader,
  HeaderTitle,
} from "./style";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Post, User } from "../../models";
import { PostNavigationProp } from "../Post/Post";
import { useAuth } from "../../hooks/auth";

const Home = () => {
  const navigation = useNavigation<PostNavigationProp>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  async function deletePost(id: string) {
    await api
      .delete<boolean>(`post/${id}`)
      .then((response) => {
        if (response.data) {
          var auxPosts: Post[] = Object.assign([], posts);
          auxPosts = auxPosts.filter((post) => post.id !== id);
          setPosts(auxPosts);
        }
      })
      .catch((err) => console.log(err));
  }

  async function editPost(post: Post) {
    navigation.navigate("Post", { post });
  }

  async function loadPosts() {
    if (loading) {
      return;
    }

    if (total > 0 && posts.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get<Post[]>("posts").then((post) =>
      post.data.map((post) =>
        api.get<User>(`users/${post.userId}`).then((user) => {
          post.user = user.data;
          return post;
        })
      )
    );

    const p = await Promise.all(response);

    setPosts(p);
    setLoading(false);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadPosts()
    });
    return unsubscribe;
  }, []);

  return (
    <HomeContainer>
      <HomeHeader>
        <HeaderTitle>Bem vindo</HeaderTitle>
      </HomeHeader>
      <FlatList
        data={posts}
        keyExtractor={(item: Post, index) => String(item.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadPosts}
        onEndReachedThreshold={0.2}
        renderItem={({ item: post }) => (
          <PostContainer>
            <PostHeader>
              <PostUsername>{post.user?.name}</PostUsername>
              <PostDate>{moment(post.createdAt).format("DD/MM/YYYY")}</PostDate>
              {post.userId === user.id ? (
                <Actions>
                  <Icon onPress={() => editPost(post)}>
                    <Feather name="edit" size={20} color="#00A2B5" />
                  </Icon>
                  <Icon onPress={() => deletePost(post.id)}>
                    <Feather name="trash" size={20} color="#E02041" />
                  </Icon>
                </Actions>
              ) : (
                <Text></Text>
              )}
            </PostHeader>

            <PostMessage>{post.message}</PostMessage>

            <Divider />
          </PostContainer>
        )}
      />
      <PostFooter>
        <TouchableOpacity onPress={() => navigation.navigate("Post")}>
          <Feather name="plus" size={50} color="#FFF" />
        </TouchableOpacity>
      </PostFooter>
    </HomeContainer>
  );
};

export default Home;
