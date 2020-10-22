# Regressão Linear

Regressão linear com TensorFlow dos casos de COVID-19 em Alagoas com dados do dia 25 de Fevereiro de 2020 à 30 de Setembro de 2020. Os dados de predição são do dia 1 até o dia 20 de Outubro de 2020.

## Como testar?

Primeiro instale o tensorflow com o comando: **npm install @tensorflow/tfjs** e instale o xlsx com o comando: **npm install xlsx**. Depois basta executar no terminal, dentro da pasta public, o seguinte comando: **node linear_regression.js**

# Resultados

Obs.: Os valores de mortes previstas foram arredondados para baixo.

| Data     | Casos | Mortes Previstas | Mortes Reais | Taxa de erro (%) |
| -------- | ----- | ---------------- | ------------ | ---------------- |
| 01/10/20 | 87504 | 2137             | 2078         | 2,84             |
| 02/10/20 | 87750 | 2143             | 2085         | 2,78             |
| 03/10/20 | 87928 | 2147             | 2091         | 2,68             |
| 04/10/20 | 88098 | 2151             | 2097         | 2,58             |
| 05/10/20 | 88135 | 2152             | 2103         | 2,33             |
| 06/10/20 | 88283 | 2156             | 2109         | 2,23             |
| 07/10/20 | 88426 | 2159             | 2115         | 2,08             |
| 08/10/20 | 88538 | 2161             | 2121         | 1,89             |
| 09/10/20 | 88653 | 2164             | 2126         | 1,79             |
| 10/10/20 | 88790 | 2167             | 2132         | 1,64             |
| 11/10/20 | 88826 | 2168             | 2138         | 1,40             |
| 12/10/20 | 88880 | 2170             | 2144         | 1,21             |
| 13/10/20 | 88954 | 2171             | 2151         | 0,93             |
| 14/10/20 | 89082 | 2174             | 2157         | 0,79             |
| 15/10/20 | 89192 | 2177             | 2162         | 0,69             |
| 16/10/20 | 89278 | 2179             | 2167         | 0,55             |
| 17/10/20 | 89365 | 2181             | 2172         | 0,41             |
| 18/10/20 | 89493 | 2184             | 2177         | 0,32             |
| 19/10/20 | 89528 | 2185             | 2182         | 0,14             |
| 20/10/20 | 89644 | 2187             | 2187         | 0,00             |

# Observações

- Versão do node utilizada: v12.19.0;
- Documentação do TensorFlow.js: *https://www.tensorflow.org/js*;
- É apenas uma atividade da disciplina de Tópicos Especiais de Informática (TEIN).
