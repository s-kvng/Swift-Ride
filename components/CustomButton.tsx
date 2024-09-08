import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "@/types/type";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  //     dynamic changing of bg based on variant
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px] ";
    default:
      return "bg-[#0286ff]";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  //   dynamic changing of text based on variant chosen
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "success":
      return "text-green-100";
    case "danger":
      return "text-red-100";
    default:
      return "text-white";
  }
};

// custom button function
const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={` w-full rounded-full flex flex-row justify-center items-center bg-red-300 shadow-md shadow-neutral-400/70 p-3 ${getBgVariantStyle(bgVariant)}  ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={` text-lg font-bold ${getTextVariantStyle(textVariant)}`}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
