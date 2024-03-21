import { View } from "react-native"; // importei do native
import { Text } from "react-native-paper"; // importei do native paper
import styles from "../config/styles";
import { useEffect } from "react";
import axios from "axios";

const API_KEY = "58f0cf79195fef97df91af42c5973568"; //peguem a de vocês
const CITY_NAME = "Joinville, SC"; //peguem a de vocês

export default function TempoScreen() {
  useEffect(() => {
    const fetchTempo = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        CITY_NAME
      )}&appid=${API_KEY}&units=metric`;

      // Faça a requisição usando Axios
      try {
        const response = await axios.get(url);
        // A resposta está disponível no objeto response.data
        const data = response.data;
        // Faça algo com os dados recebidos
      } catch (error) {
        // Trate o erro
        console.error("There was an error!", error);
      }
    };
    fetchTempo();
  }, []); // array vazio no final de useEffect simula simboliza que a função será executada apenas uma vez, quando o componente for montado

  return (
    <View style={styles.container}>
      <Text
        variant="bodyLarge" // variantes que só o paper possui
      >
        Tempo
      </Text>
    </View>
  );
}


