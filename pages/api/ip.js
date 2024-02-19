import axios from 'axios';

export default async function handler(req, res) {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        const serverIP = response.data.ip;
        res.status(200).json({ serverIP });
    } catch (error) {
        console.error('Error retrieving server IP:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
