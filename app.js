
const url = "https://api.openai.com/v1/completions"; // Endpoint de la API de OpenAI 
const beareryapikey = "Bearer " + "ACÁ TU API KEY DE OPENAI"; // API KEY de OpenAI

async function getCompletion(prompt) {
  const response = await fetch(url, {
    method: "POST", // Método HTTP 
    headers: {
      "Content-Type": "application/json", // Tipo de contenido que enviamos y recibimos
      Authorization: beareryapikey, // Pasamos nuestra API KEY de OpenAI 
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo-instruct", // Modelo de la IA que deseamos usar
      prompt: prompt, // prompt que le hacemos a la IA
      temperature: 0, // Permite que la IA siempre de responses diferentes 
      max_tokens: 256, // Tamaño de la response
    }),
  });

  // Obtenemos la response de la IA 
  const data = await response.json();  
  return data;
}

// Elementos de la vista HTML 
const prompt = document.getElementById("prompt");
const btn = document.getElementById("enviar");
const mensajes = document.getElementById("mensajes");

// prompt a la IA 
btn.addEventListener("click", async () => {

  console.log(prompt.value); // Mostramos la prompt del usuario en la consola 

  if (!prompt.value){
    // Si el usuario no ha ingresado una prompt le avisamos 
    alert("Por favor ingresa tu prompt");

  } else {
    // Enviamos la prompt del usuario y le respondemos 
    const response = await getCompletion(prompt.value);

    // Mostramos la response de la IA en la consola
    console.log(response);

    // Mostramos la response de la IA en la vista HTML 
    mensajes.innerHTML = response.choices[0].text;

  }

  
});