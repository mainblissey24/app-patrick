import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export default function ProdutosScreen() {
  const [produtos, setProdutos] = useState([]);

  // aqui usamos o hook useEffect para ser executado
  // toda vez que o componente de tela é montado
  useEffect(
    () => {
      // assim que temos a tela Produtos vamos buscar os
      // produtos chamando a função fetchProducts
      fetchProducts();
    },
    [] // o array vazio indica que a função será executada apenas uma vez, quando o componente for montado
  );

  // aqui fizemos uma anon function dentro de um constante
  // ela é assíncrona pois fetch retorna uma promessa
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products);
    setProdutos(await data.products);
  };

  return (
    <View>
      <Text>Produtos</Text>
      {produtos.length === 0 ? (
        <Text>Carregando...</Text>
      ) : (
        // função map para percorrer o array de produtos e exibir o nome de cada um
        // a função map retorna um novo array com o resultado da função passada para cada item do array
        produtos.map((produto) => (
          <View key={produto.id}>
            {/*  exibindo a imagem do produto */}
            <Image
              // a propriedade source recebe um objeto com a propriedade uri que recebe a URL da imagem
              source={{ uri: produto.images[0] }}
              // a propriedade style recebe um objeto com as propriedades width, maxWidth e height
              style={{ width: "100%", maxWidth: 350, height: 50 }}
            />
            <Text>{produto.title}</Text>
          </View>
        ))
      )}
    </View>
  );
}
