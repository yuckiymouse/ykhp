import ejs from "ejs";
import express from "express";
import { fileURLToPath } from "url";

const router = express.Router();

// views
router.get("/", function (_, res) {
  res.render("_page", {
    pageName: "index",
    options: {},
  });
});

router.get("/about", function (_, res) {
  res.render("_page", {
    pageName: "about",
    options: {
      location: "boo",
    },
  });
});

router.get("/bread", function (_, res) {
  res.render("_page", {
    pageName: "bread",
    options: {},
  });
});

router.get("/cake", function (_, res) {
  res.render("_page", {
    pageName: "cake",
    options: {},
  });
});

router.get("/videos", function (_, res) {
  res.render("_page", {
    pageName: "videos",
    options: {},
  });
});

router.get("/tools", function (_, res) {
  res.render("_page", {
    pageName: "tools",
    options: {},
  });
});

// ajax
router.post("/lol", async function (_, res) {
  res.send(
    await ejs.renderFile("./hx/lol.ejs", {
      message: "xd",
    })
  );
});

// server
async function main() {
  const app = express();
  app.set("view engine", "ejs");

  //   app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    express.static(
      fileURLToPath(new URL("./node_modules/htmx.org/dist", import.meta.url))
    )
  );
  app.use(express.static(fileURLToPath(new URL("./public", import.meta.url))));

  app.use("/", router);
  app.listen(3000); // todo: hardcoded
}

main();
