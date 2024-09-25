import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { useState } from "react";

import { images, icons } from "@/constants";
import InputField from "@/components/inputField";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";

const SignIn = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignInPress = async () => {
    console.log("onSignInPress", form);
  };

  return (
    <ScrollView className="flex-1">
      <View className="flex-1 ">
        <View className="relative w-full h-[250px]">
          <Image className="z-0 w-full h-[250px]" source={images.signUpCar} />
          <Text className=" absolute bottom-3 left-5 text-black font-bold text-3xl font-JakartaSemiBold">
            Welcome 👋
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter your Email"
            labelStyle=""
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <InputField
            label="Password"
            placeholder="Enter your Password"
            labelStyle=""
            icon={icons.lock}
            value={form.password}
            secureTextEntry
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign Up"
            onPress={() => onSignInPress}
            className=" mt-6"
          />

          {/*  OAuth */}
          <OAuth />

          <Link href="/sign-up" className=" text-center text-general-200 mt-10">
            <Text>Dont have an account? </Text>
            <Text className=" text-primary-500">Sign Up </Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
