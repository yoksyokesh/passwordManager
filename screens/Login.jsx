import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Box, Text, VStack, Input, Button } from "native-base";

const Login = () => {
  const [masterPassword, setMasterPassword] = useState(null);
  const [value, setValue] = useState("");

  const retrieveData = async () => {
    try {
      const localValue = await AsyncStorage.getItem("MASTER_PASSWORD");
      if (localValue !== null) {
        // We have data!!
        setMasterPassword(localValue);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("MASTER_PASSWORD", value);
    } catch (error) {
      // Error saving data
    }
  };

  const onProceed = () => {
    setMasterPassword(value);
    storeData();
  };

  useEffect(() => {
    retrieveData();
    console.log(masterPassword);
  }, [masterPassword]);

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
        {masterPassword ? "Enter master password" : "Create master password"}
      </Text>
      <Input
        placeholder="password"
        type="password"
        width={80}
        color="#333333"
        backgroundColor={"#ffffff"}
        _focus={{ borderColor: "#333333" }}
        borderColor="#333333"
        value={value}
        onChangeText={setValue}
      ></Input>
      <Button width={32} bgColor="#333333" onPress={() => onProceed()}>
        Proceed
      </Button>
    </VStack>
  );
};

export default Login;
