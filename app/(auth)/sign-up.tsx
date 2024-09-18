import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { images, icons } from "@/constants";
import InputField from "@/components/inputField";
import { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <ScrollView className="flex-1 bg-green-400">
      <View className="flex-1 bg-red-400">
        <View className="relative w-full h-[250px]">
          <Image className="z-0 w-full h-[250px]" source={images.signUpCar} />
          <Text className=" absolute bottom-3 left-5 text-black font-bold text-3xl font-JakartaSemiBold">
            Create Your Account
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            labelStyle=""
            icon={icons.person}
            value={form.name}
            onChangeText={""}
          />
        </View>

        <TouchableOpacity
          onPress={() => router.replace("/(auth)/welcome")}
          className=" bg-amber-500 w-full flex items-end p-5"
        >
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;
