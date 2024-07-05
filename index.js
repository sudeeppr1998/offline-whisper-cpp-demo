const express = require('express');
const path = require('path');

const app = express();

// Additional headers to add
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Access-Control-Allow-Origin', 'no-cors');
    // Add other headers as needed
    next();
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});