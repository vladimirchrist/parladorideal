import React, { useReducer, useCallback } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button, Input } from "../../components";
import { Container, Form, Greeting} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";

interface User {
  id: string;
  name: string;
  email: string;
}

const reducer = (prevState: any, updatedProperty: any) => ({
  ...prevState,
  ...updatedProperty,
});

const initState = { nome: "", password: "", errorMessage: null };

const Login = () => {
  const navigation = useNavigation();
  const [state, setState] = useReducer(reducer, initState);
  const { signIn } = useAuth();

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      try {
        await signIn({ email, password });
      } catch (err) {
        console.log(err)
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um error ao fazer login, cheque as credenciais.',
        );
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Greeting>{"Hello!"}</Greeting>

      <Form>
        <Input
          autoCapitalize="none"
          onChangeText={(email) => setState({ email })}
        >
          Email
        </Input>
        <Input
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(password) => setState({ password })}
          value={state.password}
        >
          Password
        </Input>

        <Button onPress={() => handleLogin(state.email, state.password)}>Sign in</Button>
      </Form>

      <TouchableOpacity
        style={{ alignSelf: "center", marginTop: 32 }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{ color: "#414950", fontSize: 13 }}>
          Não possui cadastro?{" "}
          <Text style={{ fontWeight: "500", color: "#29E7CD" }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Login;
