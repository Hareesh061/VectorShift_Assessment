// CustomNode5.js
import BaseNode from './BaseNode';

export const CustomNode5 = (props) => {
  return <BaseNode {...props} nodeType="customNode5" label="Custom5" outputHandles={[{ id: 'output' }]} />;
};
