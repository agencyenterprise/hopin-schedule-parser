#!/usr/bin/env node

const eventSlug = process.argv[2];

fetch(`https://hopin.com/api/v2/schedules/public/${eventSlug}/items`)
  .then(response => response.json())
  .then(console.log);
