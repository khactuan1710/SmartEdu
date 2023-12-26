const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../homePage/HomePage.html'));
});
app.get('/SubKeywordsPage', function (req, res) {
    res.sendFile(path.join(__dirname, '../subKeywordsPage/SubKeywordsPage.html'));
});
app.get('/RoadmapPage', function (req, res) {
    res.sendFile(path.join(__dirname, '../roadmapPage/RoadmapPage.html'));
});
app.get('/RecommenderSystemPage', function (req, res) {
    res.sendFile(path.join(__dirname, '../rcmSysPage/RecommenderSystemPage.html'));
});
app.get('/WatchVideos', function (req, res) {
    res.sendFile(path.join(__dirname, '../aiPlaylistAndVideosPage/AiPlaylistAndVideosPage.html'));
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));