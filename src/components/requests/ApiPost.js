async function ApiPost({ service, data }) {
  const apiUrl = process.env.REACT_APP_API_URL;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${apiUrl}${service}`, requestOptions);
    const responseData = await response.json();

    return { success: true, data: responseData };
  } catch (error) {
    console.error("Error:", error);
    return { success: false, message: "Erro na requisição" };
  }
}

export default ApiPost;
