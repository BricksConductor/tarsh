const { exec } = require("child_process");

exec("webtorrent-webui -l quiet-clam-42.deno.dev -p 3000", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
