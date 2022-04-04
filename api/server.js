const express = require('express');
const fs = require('fs');
const Reader = require('@maxmind/geoip2-node').Reader;
const cors = require('cors');
const app = express();
const port = 3001;
const dbBuffer = fs.readFileSync('./GeoLite2-City/GeoLite2-City.mmdb');
// This reader object should be reused across lookups as creation of it is expensive.
const reader = Reader.openBuffer(dbBuffer);

app.use(cors());
app.use(express.json());

app.post('/locate-ipv4', (req, res) => {
    const ip = req.body.ip;
    try {
        const cityData = reader.city(ip);
        res.json({"data": cityData});
    } catch {
        res.json({"error":"There was a problem locating this IP"});
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});