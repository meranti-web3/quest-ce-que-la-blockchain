/**
 * Ceci est une très simple implémentation du code qui tournerait dans la brosse à dents et enverrai
 * les informations sur la blockchain
 */
import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import express from "express";

import brushContract, { toothbrushWallet } from "./brushContract.mjs";

const app = express();

app.use(express.static("static"));

app.post("/brush", async (req, res) => {
  await brushContract.brushTeeth({
    gasLimit: 100000,
  });
  res.send("Bravo, c'est très propre");
});

app.get("/rewards", async (req, res) => {
  const reward = await brushContract.viewReward(toothbrushWallet.address);
  res.send(String(reward));
});

app.listen(8123, () => {
  console.log("Serveur de brosse à dents écoute sur le port 8123");
});
