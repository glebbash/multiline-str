import { build, emptyDir } from "https://deno.land/x/dnt@0.30.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  package: {
    // package.json properties
    name: "multiline-str",
    author: "glebbash <glebbash@gmail.com>",
    version: "0.0.0",
    description: "Convenient multiline strings for JavaScript",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/glebbash/multiline-str.git",
    },
    bugs: {
      url: "https://github.com/glebbash/multiline-str/issues",
    },
    homepage: "https://github.com/glebbash/multiline-str#readme",
    devDependencies: {
      "semantic-release": "^19.0.2",
      "typedoc": "0.22.17",
    },
    release: {
      branches: ["master"],
    },
  },
});

// post build steps

const additionalNpmIgnoreFiles = ["docs/", "tsconfig.json"].join("\n");
const typeDocTSConfig = { compilerOptions: { module: "NodeNext" } };

await Deno.copyFile("LICENSE", "npm/LICENSE");
await Deno.copyFile("README.md", "npm/README.md");
await Deno.writeTextFile("npm/tsconfig.json", JSON.stringify(typeDocTSConfig));
await Deno.writeTextFile("npm/.npmignore", additionalNpmIgnoreFiles, {
  append: true,
});
