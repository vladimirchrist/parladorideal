import React, { useReducer } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Input, Button } from "../../components";
import { Container, Form, Greeting } from "./styles";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

const reducer = (prevState: any, updatedProperty: any) => ({
  ...prevState,
  ...updatedProperty,
});

const initState = {
  email: "",
  name: "",
  password: "",
  errorMessage: null,
};

const Register = () => {
  const navigation = useNavigation();
  const [state, setState] = useReducer(reducer, initState);

  const handleSignUp = async () => {
    const { email, name, password } = state;

    api.post('/users', {email, name, password})
     .then(() => {
        navigation.navigate('Login');
      })
      .catch(error => {
        setState({ errorMessage: "Erro ao cadastrar" });
      });
  };

  return (
    <Container>
      <Greeting>{"Sign up to get started."}</Greeting>

      <Form>
        <Input
          autoCapitalize="none"
          onChangeText={(name) => setState({ name })}
          value={state.name}
        >
          Nome
        </Input>

        <Input
          autoCapitalize="none"
          onChangeText={(email) => setState({ email })}
          value={state.email}
        >
          Email Address
        </Input>

        <Input
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(password) => setState({ password })}
          value={state.password}
        >
          Password
        </Input>
      <Button onPress={handleSignUp}>Registrar</Button>
      </Form>

      <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}
        onPress={() =>  navigation.navigate('Login')}
      >
        <Text style={{ color: "#414950", fontSize: 13 }}>
          Já possui uma conta?{"  "}
          <Text style={{ fontWeight: "500", color: "#29E7CD" }}>Login</Text>
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Register;
