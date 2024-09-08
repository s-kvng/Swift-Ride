import { Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";

import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Onboarding = () => {
  //   reference to connect to swiper component
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // boolean value to check if it's the last swiper slide
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className=" flex h-full items-center justify-between bg-white ">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="  w-full flex items-end p-5"
      >
        <Text className=" text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-gray-600 rounded-full " />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full " />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className=" flex justify-center items-center">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              alt="Welcome Image"
              resizeMode="contain"
            />
            <View className=" flex flex-row items-center justify-center w-full  mt-10 ">
              <Text className=" text-black text-3xl font-JakartaBold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className=" text-[#858585] font-JakartaSemiBold text-center text-lg mx-10 mt-5">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      {
        <CustomButton
          title={isLastSlide ? "Get Started" : "Next"}
          onPress={() =>
            isLastSlide
              ? router.replace("/(auth)/sign-up")
              : swiperRef.current?.scrollBy(1)
          }
          className="w-11/12 mt-10"
        />
      }
    </SafeAreaView>
  );
};

export default Onboarding;
