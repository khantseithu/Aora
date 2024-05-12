import {View, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";

function HomeScreen() {
    return (
        <SafeAreaView>
            <View className="flex-1 items-center justify-center bg-slate-400">
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Hello World</Text>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;