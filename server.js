const http=require("http");
const server= http.createServer((req, res) => {
if (req.url === "/"){
    res.end('<h1>Caravan 1th response</h1>');
} else if (req.url==="/Caravans"){
    res.end('<h1>Black</h1> <br> <h1>Venom</h1> <br> <h1>Invader</h1> <br> <h1>Glory</h1>')
} else {
    res.end('<h1>404 ERROR</h1>')
}
})

const PORT= process.env.PORT || 5002;
server.listen(PORT, () => {
console.log("Server running on port", PORT)
});
