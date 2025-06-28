async function sendMessage() {
  const input = document.getElementById('userInput').value;
  const responseDiv = document.getElementById('response');

  const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB627Dzo5ZP0ea5Oy1ZI88-GqeVvzzdTlY", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: input }] }]
    })
  });

  const data = await res.json();
  responseDiv.innerText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
}

