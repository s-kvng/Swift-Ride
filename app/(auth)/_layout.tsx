import { Stack, Redirect } from "expo-router";
import "react-native-reanimated";
import { useAuth } from "@clerk/clerk-expo";

const Layout = () => {
  const { isSignedIn } = useAuth();

  //   redirect users if they signed in
  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  }

  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
