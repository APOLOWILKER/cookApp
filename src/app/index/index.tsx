import { IngredientCard } from "@/components/IngredientCard";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  const [selected, setSelected] = useState<string[]>([]);

  function handleToggleSelected(value: string){
    if(selected.includes(value)){
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
    console.log(selected);
    
  }

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

      <ScrollView 
    contentContainerStyle={styles.ingredients}
    showsHorizontalScrollIndicator={false}
  >
    {Array.from({ length: 100 }).map((item, index) => (
      <IngredientCard 
        key={index} 
        name="maçã" 
        image="" 
        selected={selected.includes(String(index))}
        onPress={() => handleToggleSelected(String(index))}
      />
    ))}
   </ScrollView>
    </View>
  )
}