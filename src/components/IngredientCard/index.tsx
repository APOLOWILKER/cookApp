import { Image, Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

export type IngredientsProps = {
  name: string;
  image: string;
  selected?: boolean;
}

export function IngredientCard(
  { 
    name, 
    image, 
    selected = false, 
    ...rest } : IngredientsProps & PressableProps){

  return(
    <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
      <Image source={require("@/images/apple.png")} style={styles.image}/>
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  )
}