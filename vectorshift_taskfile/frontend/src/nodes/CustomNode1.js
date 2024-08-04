// CustomNode1.js
import BaseNode from './BaseNode';

export const CustomNode1 = (props) => {
  return <BaseNode {...props} nodeType="customNode1" label="Custom1" outputHandles={[{ id: 'output' }]} />;
};
