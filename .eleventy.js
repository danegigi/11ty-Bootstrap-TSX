/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
import "tsx/esm";
import { renderToStaticMarkup } from "react-dom/server";

export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("dist");

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addTemplateFormats(["11ty.ts", "11ty.jsx", "11ty.tsx"]);

  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
    // Allow the file to export a React component function
    compile: async function (inputContent, inputPath) {
      const module = await import(inputPath);
      const Component = module.default;

      return async function (data) {
        const jsx = Component(data); // pass all data to component
        const html = renderToStaticMarkup(jsx);
        return html;
      };
    },
  });
}
