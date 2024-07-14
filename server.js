const http=require("http");
const server= http.createServer((req, res) => {
if (req.url === "/"){
    res.end('<h1>Motor 1th response</h1>');
} else if (req.url==="/Motors"){
    res.end('<h1>Mercedes</h1> <br> <h1>Audi</h1> <br> <h1>Chevrolet</h1> <br> <h1>Porsche</h1>')
} else {
    res.end('<h1>404 ERROR</h1>')
}
})

const PORT= process.env.PORT || 5002;
server.listen(PORT, () => {
console.log("Server running on port", PORT)
});
