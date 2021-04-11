// From https://christianlobaugh.com/blog/2020/01/adding-code-blocks-to-sanity-io-studio-to-improve-blog/
import React from 'react';

export default ({ node }) => {
  if (!node || !node.code) {
    return null;
  }
  const { language, code } = node;
  return (
    <div>
      language = {language}
      <pre>{code}</pre>
    </div>
  );
};
