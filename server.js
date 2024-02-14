import express from 'express'
import fetch from 'node-fetch';
import cors from 'cors'
const app = express();


app.use(cors());
app.use(express.json());

app.get('/api/members/stgau1930', async (req, res) => {
    try {
        const response = await fetch('https://api.vk.com/method/groups.getMembers?group_id=stgau1930&access_token=e203074be203074be203074bdfe1144524ee203e203074b87c8aa28359f3f4ae65b38d8&v=5.199');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/members/agrarian_university1930', async (req, res) => {
    try {
        const response = await fetch('https://api.vk.com/method/groups.getMembers?group_id=agrarian_university1930&access_token=e203074be203074be203074bdfe1144524ee203e203074b87c8aa28359f3f4ae65b38d8&v=5.199');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/members/stgau_spo', async (req, res) => {
    try {
        const response = await fetch('https://api.vk.com/method/groups.getMembers?group_id=stgau_spo&access_token=e203074be203074be203074bdfe1144524ee203e203074b87c8aa28359f3f4ae65b38d8&v=5.199');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/members/stgau_itres', async (req, res) => {
    try {
        const response = await fetch('https://api.vk.com/method/groups.getMembers?group_id=stgau_itres&access_token=e203074be203074be203074bdfe1144524ee203e203074b87c8aa28359f3f4ae65b38d8&v=5.199');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/members/stgau_professionalitet', async (req, res) => {
    try {
        const response = await fetch('https://api.vk.com/method/groups.getMembers?group_id=stgau_professionalitet&access_token=e203074be203074be203074bdfe1144524ee203e203074b87c8aa28359f3f4ae65b38d8&v=5.199');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});