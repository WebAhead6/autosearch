const router = (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end();
  } else if (req.url === "/autocomplete" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      if (data) {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(data);
      } else {
        res.writeHead(302, { location: "/blog" });
        res.end("you have been redirected");
      }
    });
  } else {
    missingHandler(request, response);
  }
};
module.exports = router;
