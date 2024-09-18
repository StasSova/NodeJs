import http from "node:http";
import path from "node:path";
import fs from "node:fs";
import querystring from "node:querystring";
import "dotenv/config";

const __dirname = import.meta.dirname;

const mimeTypes = {
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
};

const getStaticFile = (res, filePath, ext) => {
  res.setHeader("Content-Type", mimeTypes[ext]);
  fs.readFile(path.join(".", "public", filePath), (err, data) => {
    if (err) {
      console.error("Error reading logs:", err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    } else {
      res.end(data);
    }
  });
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} : ${req.url}`);
  const url = req.url;
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const queryParams = parsedUrl.searchParams;
  const qstr = querystring.parse(queryParams.toString());

  console.log(qstr);
  if (req.method === "POST") {
    if (req.method === "GET") {
      const content = fs.readFileSync(pathToFile);
      res.setHeader("Content-Type", "text/html");
      res.write(content);
      res.end();
    } else if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        const newData = JSON.parse(body);

        fs.readFile("data.json", "utf8", (err, data) => {
          let jsonData = [];

          if (!err && data) {
            jsonData = JSON.parse(data);
          }
          jsonData.push(newData);
          fs.writeFile(
            "data.json",
            JSON.stringify(jsonData, null, 2),
            (err) => {
              if (err) {
                res.statusCode = 500;
                res.end("Internal Server Error");
              } else {
                res.statusCode = 201;
                res.end("Created");
              }
            },
          );
        });
      });
    }
  } else {
    switch (url) {
      case "/": {
        console.log("Body: ", req.body);
        const pathToFile = path.join(__dirname, "index.html");
        const content = fs.readFileSync(pathToFile);
        res.write(content);
        res.end();
        break;
      }
      case "/about": {
        const pathToFile = path.join(__dirname, "about.html");
        const content = fs.readFileSync(pathToFile);
        res.write(content);
        res.end();
        break;
      }
      default: {
        const extName = path.extname(url).toLocaleLowerCase();
        if (extName in mimeTypes) {
          getStaticFile(res, url, extName);
        } else {
          res.statusCode = 404;
          res.end("Not Found");
        }
        break;
      }
    }
  }
});

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
