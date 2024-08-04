// InputNode.js
import BaseNode from './BaseNode';

export const InputNode = (props) => {
  return <BaseNode {...props} nodeType="customInput" label="Input" outputHandles={[{ id: 'value' }]} />;
};
