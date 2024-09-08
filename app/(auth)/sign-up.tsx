import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const SignUp = () => {
  return (
    <SafeAreaView>
      <Text className="text-red-600 mt-10 font-bold text-2xl">Signup</Text>
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/welcome")}
        className=" bg-amber-500 w-full flex items-end p-5"
      >
        <Text>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;
