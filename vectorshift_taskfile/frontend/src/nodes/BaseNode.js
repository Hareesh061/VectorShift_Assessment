// BaseNode.js
import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import './BaseNode.css'

const BaseNode = ({ id, data, nodeType, label, inputHandles = [], outputHandles = [] }) => {
  const [currName, setCurrName] = useState(data?.name || id.replace(`${nodeType}-`, `${label.toLowerCase()}_`));
  const [type, setType] = useState(data.type || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className='base-node'>
      {inputHandles.map((handle) => (
        <Handle
          key={handle.id}
          type="target"
          position={handle.position || Position.Left}
          id={`${id}-${handle.id}`}
          style={{ top: handle.top }}
        />
      ))}
      <div className="node-header">
        <span>{label}</span>
      </div>
      <div className="node-content">
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="node-input"                                                                                   
          />
        </label>
        <label>
          Type:
          <select value={type} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
      {outputHandles.map((handle) => (
        <Handle
          key={handle.id}
          type="source"
          position={handle.position || Position.Right}
          id={`${id}-${handle.id}`}
        />
      ))}
    </div>
  );
};

export default BaseNode;
