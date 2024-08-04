
import React from 'react';
import './style.css';

export const SubmitButton = ({ nodes, edges }) => {
    const handleSubmit = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nodes, edges })
            });

            if (response.ok) {
                const data = await response.json();
                alert(`Number of Nodes: ${data.num_nodes}\nNumber of Edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
            } else {
                alert('Failed to parse the pipeline');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <div className="submit-contain">
            <button type="button" className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
    );
};
