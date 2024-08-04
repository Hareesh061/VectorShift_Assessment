import React, { useState } from 'react';
import { SubmitButton } from './submit';

const ParentComponent = () => {
   
    return (
        <div>
            <SubmitButton nodes={nodes} edges={edges} />
        </div>
    );
}

export default ParentComponent;
