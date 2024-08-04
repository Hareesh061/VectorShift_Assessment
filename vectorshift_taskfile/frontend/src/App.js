
import React, { useState } from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    const handleAddNode = (e) => {
        if (e.key === 'Enter') {
            setNodes([...nodes, e.target.value]);
            e.target.value = '';
        }
    };

    const handleAddEdge = (e) => {
        if (e.key === 'Enter') {
            const [from, to] = e.target.value.split(' ');
            if (from && to) {
                setEdges([...edges, { from, to }]);
                e.target.value = '';
            }
        }
    };

    return (
        <div>
            <PipelineToolbar />
            <PipelineUI />
            <div>
                <input type="text" placeholder="Add Node" onKeyDown={handleAddNode} />
                <input type="text" placeholder="Add Edge (from to)" onKeyDown={handleAddEdge} />
            </div>
            <SubmitButton nodes={nodes} edges={edges} />
        </div>
    );
}

export default App;
