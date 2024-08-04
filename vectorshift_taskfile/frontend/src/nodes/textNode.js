// TextNode.js
import BaseNode from './BaseNode';

export const TextNode = (props) => {
  return <BaseNode {...props} nodeType="text" label="Text" outputHandles={[{ id: 'output' }]} />;
};
