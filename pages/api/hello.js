// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios");
const cheerio = require("cheerio");
const Cors = require("cors");

const url = "https://www.tribunnews.com/index-news";
const cors = Cors({
  methods: ["POST"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  let result = axios.get(url).then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);

    let list = $("select#sectionpil > option");
    let index = [];

    list.each(function (v, i) {
      let link = url + "/" + $(this).attr("value");
      let title = $(this).text();

      index.push({
        title,
        link,
      });
    });
    return {
      message: "succes",
      result: {
        length: index.length,
        data: index,
      },
    };
  });

  return res.json(await result);
}
