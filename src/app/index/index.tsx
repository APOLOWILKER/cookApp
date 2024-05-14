import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      {/* quebra de linha */}
        Escolha {"\n"} 
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>
    </View>
  )
}