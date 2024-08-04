// CustomNode3.js
import BaseNode from './BaseNode';

export const CustomNode3 = (props) => {
  return <BaseNode {...props} nodeType="customNode3" label="Custom3" inputHandles={[{ id: 'input1' }, { id: 'input2' }]} outputHandles={[{ id: 'output1' }, { id: 'output2' }]} />;
};
