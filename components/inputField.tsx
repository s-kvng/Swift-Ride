import { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  TextInput,
  Platform,
  Keyboard,
} from "react-native";
import { InputFieldProps } from "@/types/type";

// @ts-ignore
const InputField = ({
  containerStyle,
  inputStyle,
  label,
  labelStyle,
  placeholder,
  secureTextEntry,
  icon,
  iconStyle,
  value,
  onChangeText,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className=" my-2 w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={` flex flex-row justify-start items-center relative bg-neutral-200 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={` w-6 h-6 ml-4 ${iconStyle}`} />
            )}
            <TextInput
              className={` rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
              placeholder={placeholder}
              placeholderTextColor={"gray"}
              secureTextEntry={secureTextEntry}
              value={value}
              onChangeText={onChangeText}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
