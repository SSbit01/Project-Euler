const folder = "./Code/";
const fs = require("fs");

const stars = "*".repeat(25);

fs.readdirSync(folder).forEach((file, i) => {
  console.log(`${stars}
Answer to Problem ${i+1}:
${require(`${folder+file}`)}`);
});