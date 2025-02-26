import { Text, View } from "react-native";
import { colors } from "@/styles/colors";

export default function Index() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
              <Text style={{ color: colors.gray[800] }}> Home </Text>
         </View>
    )
}