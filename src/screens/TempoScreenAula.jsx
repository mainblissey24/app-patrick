import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

/**
 *
 * LOGICA SIMPLES
 * - ENTREI NESSA TELA
 * - OPA! PRECISO BUSCAR A TEMPERATURA
 * - COMO? QUEM É O CARA QUE EXECUTA QUANDO ENTRA?
 * - LEMBREI É O U... COM [] VAZIO
 * -
 */
const API = "a6afed81d4549068b4ea6be21159a744";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Joinville&appid=${API}&units=metric`;

export default function TempoScreenAula() {
  const [temperatura, setTemperatura] = useState("");

  const fetchTempo = async () => {
    // vou lá buscar o JSON na internet
    const resposta = await fetch(URL);
    // recebo essa informação e converto ela em programação que é JSON
    const data = await resposta.json();
    console.log(resposta);
    console.log(data);
    setTemperatura(data.main);
  };

  useEffect(() => {
    fetchTempo();
  }, []);
  // array vazio no final de useEffect simula simboliza
  // que a função será executada apenas uma vez, quando o componente for montado

  return (
    <View>
      <Text variant="headlineLarge">Possui mais variedades</Text>
      <Text>Temperatura atual: {temperatura?.temp}</Text>
      <Text>Temperatura Maxima: {temperatura?.temp_max}</Text>
      <Text>Temperatura Minima: {temperatura?.temp_min}</Text>
    </View>
  );
}
