#!/usr/bin/env node
const fs = require("fs");
const slugify = require("./slugify");

const hopinSlug = process.argv[2];
const webflowSlug = process.argv[3];

const header = "Name,Slug,Event,Speakers\n";

const processSchedule = ({ items }) =>
  items
    .map((i) => ({
      name: i.name,
      slug: [webflowSlug, slugify(i.name)].join("-"),
      event: webflowSlug,
      speakers: i.speakers.map((s) => slugify(s.name)).join("; "),
    }))
    .reduce(
      (acc, item) => acc.concat(Object.values(item).join(",")).concat("\n"),
      header
    );

const saveFile = (content) => fs.writeFileSync(`${hopinSlug}.csv`, content);

fetch(`https://hopin.com/api/v2/schedules/public/${hopinSlug}/items`)
  .then((response) => response.json())
  .then(processSchedule)
  .then(saveFile);

/*

ASSUMPTIONS

- Hopin endpoint version as of April 2023
- EventSpeaker slugs are generated automatically by Webflow

*/
