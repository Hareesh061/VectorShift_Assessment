// OutputNode.js
import BaseNode from './BaseNode';

export const OutputNode = (props) => {
  return <BaseNode {...props} nodeType="customOutput" label="Output" inputHandles={[{ id: 'value' }]} />;
};
