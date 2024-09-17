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
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("Body: ", body);
      res.end("Received POST data");
    });
    //todo: сделать запись полученных данных в файл (append).
    // вернуть страничку с тем, что данные успешно обновленны.
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
