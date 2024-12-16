// Create web server
// 1. Import express
const express = require('express');
// 2. Create express server
const app = express();
// 3. Define PORT
const PORT = 3000;
// 4. Define route
app.get('/', (req, res) => {
  res.send('Hello World');
});
// 5. Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// 6. Create comments.js
// 7. Add comments to the file
// 8. Import the file
// 9. Add comments to the route
// 10. Start server
// 11. Check the result