import fs from "node:fs";
import path from "node:path";

const spanishHtmlPath = path.join(process.cwd(), "dist", "es", "index.html");

if (fs.existsSync(spanishHtmlPath)) {
  const html = fs.readFileSync(spanishHtmlPath, "utf8");
  fs.writeFileSync(
    spanishHtmlPath,
    html.replace('<html lang="en-US">', '<html lang="es-US">')
  );
}
