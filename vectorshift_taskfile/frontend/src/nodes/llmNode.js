// LLMNode.js
import BaseNode from './BaseNode';

export const LLMNode = (props) => {
  return (
    <BaseNode
      {...props}
      nodeType="llm"
      label="LLM"
      inputHandles={[
        { id: 'system', top: `${100 / 3}%` },
        { id: 'prompt', top: `${200 / 3}%` }
      ]}
      outputHandles={[{ id: 'response' }]}
    />
  );
};

