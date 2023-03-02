import { graphql, rest } from "msw";
import { API_URL, IMAGE_URL } from "../config";
import base64Image from "./nyancat.png";

export const CREATED_AT = "2015-11-06T18:36:54.148Z";

export const catHandler = rest.get(API_URL, (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json([
      {
        _id: "catId",
        owner: "Joe Doe",
        createdAt: CREATED_AT,
        tags: ["mockedTag1", "mockedTag2"],
      },
    ])
  )
);

export const catImgHandler = rest.get(
  `${IMAGE_URL}/:tag`,
  async (req, res, ctx) => {
    const imageBuffer = await fetch(base64Image).then((res) =>
      res.arrayBuffer()
    );

    return res(
      ctx.set("Content-Length", imageBuffer.byteLength.toString()),
      ctx.set("Content-Type", "image/png"),
      ctx.body(imageBuffer)
    );
  }
);

const github = graphql.link("https://api.github.com/graphql");

export const ghUserGQL = github.query("User", (req, res, ctx) => {
  return res(
    ctx.data({
      user: {
        bio: "",
        company: "@gittub",
        name: "Octocat",
        repositories: {
          nodes: [
            {
              name: "Hello-World",
            },
            {
              name: "Spoon-Knife",
            },
            {
              name: "download",
            },
            {
              name: "decompress",
            },
            {
              name: "bin-wrapper",
            },
          ],
        },
      },
    })
  );
});

export const handlers = [catImgHandler, catHandler, ghUserGQL];
