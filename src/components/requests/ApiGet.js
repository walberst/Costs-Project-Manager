async function ApiGet({ service }) {
  const apiUrl = process.env.REACT_APP_API_URL;

  if (!service.startsWith("/")) {
    service = `/${service}`;
  }

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`${apiUrl}${service}`, requestOptions);
    const responseData = await response.json();

    return { success: true, data: responseData };
  } catch (error) {
    console.error("Error:", error);
    return { success: false, message: "Erro na requisição: " + error };
  }
}

export default ApiGet;
