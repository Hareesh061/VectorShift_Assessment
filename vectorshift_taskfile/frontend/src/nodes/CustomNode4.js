// CustomNode4.js
import BaseNode from './BaseNode';

export const CustomNode4 = (props) => {
  return <BaseNode {...props} nodeType="customNode4" label="Custom4" inputHandles={[{ id: 'input' }]} outputHandles={[{ id: 'output1' }, { id: 'output2' }]} />;
};
