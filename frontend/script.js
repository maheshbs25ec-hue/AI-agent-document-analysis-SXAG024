async function analyzeText() {
  const text = document.getElementById("inputText").value;

  const res = await fetch("http://localhost:5000/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  const data = await res.json();

  document.getElementById("output").innerText = data.simplified;
}
