async function predictImage() {
  const predictionKey = "2bh4IkI4eHV4XF6xeEJDXr4SuAWSpYdpGnW5nAj7w0SkuxJYkX1WJQQJ99BFACYeBjFXJ3w3AAAIACOGNRDx";
  const endpoint = "https://7aiteam04dongdong-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/935c6c6c-b17d-476e-8004-95c78ba8c7fe/classify/iterations/Iteration5_dong/image";

  const imageInput = document.getElementById("imageInput");
  const file = imageInput.files[0];
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Prediction-Key": predictionKey
    },
    body: formData
  });

  const data = await res.json();
  const resultBox = document.getElementById("result");
  resultBox.innerHTML = data.predictions
    .map(p => `${p.tagName}: ${Math.round(p.probability * 100)}%`)
    .join("<br>");
}
