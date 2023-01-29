import { AsyncStorage } from "react-native";
import { Box, Text, VStack, Input, Button } from "native-base";

const Login = () => {
  return (
    <VStack
      justifyContent={"center"}
      flex={1}
      space={4}
      backgroundColor="#ffffff"
      alignItems={"center"}
    >
      <Text
        alignSelf={"center"}
        fontWeight="bold"
        fontSize={30}
        color="#333333"
      >
        Enter master password
      </Text>
      <Input
        placeholder="password"
        type="password"
        width={80}
        color="#333333"
        backgroundColor={"#ffffff"}
        _focus={{ borderColor: "#706c61" }}
        borderColor="#706c61"
      ></Input>
      <Button width={32} bgColor="#706c61">
        Proceed
      </Button>
    </VStack>
  );
};

export default Login;
