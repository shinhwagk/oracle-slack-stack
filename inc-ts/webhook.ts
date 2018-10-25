import * as http from "http";

import * as slack from "@slack/client";

import { MessageSchema } from "../lib/alertmanager";

const WEBHOOK_PORT = process.env.WEBHOOK_PORT || 8888;


http.createServer((req, res) => {
  if (req.method === "POST") {
    let rawData = '';
    req.on("data", (chunk) => { rawData += chunk; })
    req.on("end", () => {
      const ms = JSON.parse(rawData) as MessageSchema;

    })
  } else {
    res.writeHead(400); res.end('not ok');
  }
}).listen(WEBHOOK_PORT)