import axios from "axios";

async function fetchHerosAPI() {
  try {
    const response = await axios.get(
      "https://homologacao3.azapfy.com.br/api/ps/metahumans",
      {
        headers: {
          accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar Heróis:", error);
    throw error;
  }
}

export default fetchHerosAPI;
