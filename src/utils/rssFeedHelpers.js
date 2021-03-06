// From https://gist.github.com/kmelve/0e4de671d08769cc7c60b948f7e15a29 d
const { isFuture } = require('date-fns');

function cn(...args) {
  return args.filter(Boolean).join(' ');
}

function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
}

function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current;
}

function filterOutDocsPublishedInTheFuture({ publishedAt }) {
  return !isFuture(new Date(publishedAt));
}

function getBlogUrl(slug) {
  return `/writing/${slug.current || slug}/`;
}

function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

const defaults = { nonTextBehavior: 'remove' };

function toPlainText(blocks, opts = {}) {
  const options = { ...defaults, ...opts };
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove'
          ? ''
          : `[${block._type} block]`;
      }

      return block.children.map((child) => child.text).join('');
    })
    .join('\n\n');
}

exports.cn = cn;
exports.mapEdgesToNodes = mapEdgesToNodes;
exports.filterOutDocsWithoutSlugs = filterOutDocsWithoutSlugs;
exports.filterOutDocsPublishedInTheFuture = filterOutDocsPublishedInTheFuture;
exports.getBlogUrl = getBlogUrl;
exports.buildImageObj = buildImageObj;
exports.toPlainText = toPlainText;
