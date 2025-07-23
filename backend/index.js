const express = require('express');
const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
