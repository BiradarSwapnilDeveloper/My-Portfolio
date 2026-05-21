const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// Serve all frontend files dynamically
app.use(express.static(__dirname));

// Backend API Endpoint for processing Contact Form
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Simulating Backend processing (You can add NodeMailer here later)
    setTimeout(() => {
        console.log('\n🌟 --- NEW CONTACT REQUEST RECEIVED --- 🌟');
        console.log(`👤 Name    : ${name}`);
        console.log(`📧 Email   : ${email}`);
        console.log(`💬 Message : ${message}`);
        console.log('-------------------------------------------\n');

        // Respond exactly what frontend expects
        res.status(200).json({ success: true, message: "Message sent successfully!" });
    }, 1000); // 1-second delay to show the "Sending..." animation beautifully on frontend
});

// Fallback to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`
    ======================================
    🚀 Backend Server running successfully!
    🌐 Access Portfolio at: http://localhost:${PORT}
    ======================================
    `);
});
