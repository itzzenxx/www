import { minify } from 'html-minifier';
import { type Handle } from '@sveltejs/kit';

const minifyOpts = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  decodeEntities: true,
  html5: true,
  ignoreCustomComments: [/^#/],
  minifyCSS: true,
  minifyJS: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  sortAttributes: true,
  sortClassName: true,
};

export const handle: Handle = async ({ event, resolve }) => {
  return resolve(event, {
    transformPageChunk: ({ html, done }) => {
      return minify(html, minifyOpts);
    },
  });
};
