// Downloads company logos listed in logos/sources.json into logos/.
// Run by .github/workflows/fetch-logos.yml; the result is committed to the repo.
import { readFile, writeFile } from "node:fs/promises";

const sources = JSON.parse(await readFile("logos/sources.json", "utf8"));
let failed = 0;

for (const [file, url] of Object.entries(sources)) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (portfolio logo fetch)" } });
    const type = res.headers.get("content-type") || "";
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    if (!type.startsWith("image/")) throw new Error(`not an image (${type})`);
    let body = Buffer.from(await res.arrayBuffer());
    if (body.length > 2_000_000) throw new Error("file larger than 2 MB");
    if (file.endsWith(".svg")) {
      // Strip anything executable before serving the SVG from this site.
      body = Buffer.from(body.toString("utf8")
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*')/gi, "")
        .replace(/(href|xlink:href)\s*=\s*(["'])\s*javascript:[^"']*\2/gi, ""));
    }
    await writeFile(`logos/${file}`, body);
    console.log(`saved logos/${file} (${body.length} bytes)`);
  } catch (e) {
    failed++;
    console.warn(`skipped ${file}: ${e.message}`);
  }
}
if (failed === Object.keys(sources).length) process.exit(1);
