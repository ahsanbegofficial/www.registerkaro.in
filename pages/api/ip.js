export default function handler(req, res) {
    const ip = req.connection.remoteAddress;
    console.log(ip);
    res.status(200).json({ ip });
}
