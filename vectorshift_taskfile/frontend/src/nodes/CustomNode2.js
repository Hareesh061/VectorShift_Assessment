// CustomNode2.js
import BaseNode from './BaseNode';

export const CustomNode2 = (props) => {
  return <BaseNode {...props} nodeType="customNode2" label="Custom2" inputHandles={[{ id: 'input1' }]} outputHandles={[{ id: 'output1' }]} />;
};
