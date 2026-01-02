import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const iconsPath = path.join(projectRoot, "src/lib/icons/icon-path.ts");
const outputDir = path.join(projectRoot, "src/lib/icons/generated");

const toKebab = (value) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();

const toAriaLabel = (value) => toKebab(value).replace(/-/g, " ");

const indent = (content, depth = 1) => {
  const pad = "  ".repeat(depth);
  return content
    .split("\n")
    .map((line) => (line.trim() ? pad + line.trim() : ""))
    .filter(Boolean)
    .join("\n");
};

const cleanSvg = (raw) => {
  const withoutAttrs = raw
    .replace(/\r\n?/g, "\n")
    .replace(/\s*stroke="[^"]*"/g, "")
    .replace(/\s*stroke-linecap="[^"]*"/g, "")
    .replace(/\s*stroke-linejoin="[^"]*"/g, "");

  const normalized = withoutAttrs
    .replace(/>\s+</g, ">\n<")
    .replace(/\s{2,}/g, " ")
    .trim();

  return normalized
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
};

const parseIcons = async () => {
  const source = await fs.readFile(iconsPath, "utf8");
  const match = source.match(/export const icons\s*=\s*(\{[\s\S]*?\n\}\s*)\s*;/);
  
  if (!match || !match[1]) {
    throw new Error("Unable to parse icons object from icon-path.ts");
  }

  return new Function(`return ${match[1]};`)();
};

const buildComponent = (name, rawSvg) => {
  const cleaned = cleanSvg(rawSvg);
  const ariaLabel = toAriaLabel(name);

  if (!cleaned) {
    return null;
  }

  return `<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "${ariaLabel}",
    ...restProps
  }: {
    size?: number | string;
    color?: string;
    className?: string;
    style?: string;
    ariaLabel?: string;
    restProps?: Record<string, any>;
  } = $props();
</script>

<IconBase {size} {color} {className} {style} ariaLabel={ariaLabel} {...restProps}>
${indent(cleaned)}
</IconBase>
`;
};

const main = async () => {
  await fs.mkdir(outputDir, { recursive: true });
  const icons = await parseIcons();
  const entries = Object.entries(icons);

  const generated = [];

  for (const [name, rawSvg] of entries) {
    const component = buildComponent(name, rawSvg);
    if (!component) {
      console.warn(`Skipping ${name} because it has no SVG content.`);
      continue;
    }

    const fileName = `icon-${toKebab(name)}.svelte`;
    const filePath = path.join(outputDir, fileName);
    await fs.writeFile(filePath, component, "utf8");
    generated.push({ name, fileName });
  }

  const indexContent = generated
    .map(({ name, fileName }) => `export { default as Icon${name} } from "./${fileName}";`)
    .join("\n") + "\n";

  await fs.writeFile(path.join(outputDir, "index.ts"), indexContent, "utf8");

  console.log(`Generated ${generated.length} icons in ${outputDir}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
