import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Box, Text, VStack, Input, Button, Spinner } from "native-base";

const Login = () => {
  const [masterPassword, setMasterPassword] = useState(undefined);
  const [inputFieldValue, setInputFieldValue] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const retrieveData = async () => {
    try {
      const localValue = await AsyncStorage.getItem("MASTER_PASSWORD");
      setMasterPassword(localValue);
      // if (localValue !== null) {
      //   // We have data!!
      //   setMasterPassword(localValue);
      // }
    } catch (error) {
      // Error retrieving data
    }
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("MASTER_PASSWORD", inputFieldValue);
    } catch (error) {
      // Error saving data
    }
  };

  const onProceed = () => {
    setErrMsg("");
    if (!inputFieldValue) {
      setErrMsg("Enter valid password");
      return;
    }
    //creating master password, masterPassword can be null only when user haven't created a password yet
    if (masterPassword === null) {
      setMasterPassword(inputFieldValue);
      storeData();
    }
    //validate entered password
    else {
      if (inputFieldValue !== masterPassword)
        setErrMsg("Wrong password. Please enter correct password");
      else console.log("validated...");
    }
  };

  const resetPassword = () => {
    setInputFieldValue(null);
    storeData();
    setMasterPassword(null);
  };

  useEffect(() => {
    retrieveData();
    console.log(masterPassword);
  }, [masterPassword]);

  return masterPassword === undefined ? (
    <Spinner flex={1} color="#333333" size={"lg"} />
  ) : (
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
        {masterPassword !== null
          ? "Enter master password"
          : "Create master password"}
      </Text>
      <Input
        placeholder="password"
        type="password"
        width={80}
        color="#333333"
        backgroundColor={"#ffffff"}
        _focus={{ borderColor: "#333333" }}
        borderColor="#333333"
        value={inputFieldValue}
        onChangeText={setInputFieldValue}
      ></Input>
      <Button
        width={32}
        bgColor="#333333"
        onPress={() => onProceed()}
        _pressed={{ bgColor: "#706c61" }}
      >
        Proceed
      </Button>
      <Text color={"#706c61"} onPress={() => resetPassword()}>
        Forgot password
      </Text>
      <Text color={"#ff3737"}>{errMsg}</Text>
    </VStack>
  );
};

export default Login;
