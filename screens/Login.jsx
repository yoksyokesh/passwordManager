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
        fontWeight="semibold"
        fontSize={25}
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
        _focus={{ borderColor: "#333333" }}
        borderColor="#333333"
      ></Input>
      <Button width={32} bgColor="#333333">
        Proceed
      </Button>
    </VStack>
  );
};

export default Login;
