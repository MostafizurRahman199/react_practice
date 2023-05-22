import React from 'react';

const UpdatedComponent = (originalComponent)=>{
    class newComponent extends React.Component{
        render(){
            return <originalComponent name='Mostafiz'></originalComponent>
        }
    }

    return newComponent;

}

export default UpdatedComponent;