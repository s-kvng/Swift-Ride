import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { useState, useCallback } from "react";
import { useSignIn } from "@clerk/clerk-expo";

import { images, icons } from "@/constants";
import InputField from "@/components/inputField";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(root)/(tabs)/home");
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(signInAttempt, null, 2));
        Alert.alert("Error", "Error signing in");
      }
    } catch (err: any) {
      Alert.alert("Error", err.errors[0].longMessage);
    }
  }, [isLoaded, form.email, form.password]);

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
            title="Sign In"
            onPress={onSignInPress}
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
