import React from 'react';
import {Button} from './Button';

const style={
    back:{
        backgroundColor: 'rgb(183, 190, 237, 0.5)',
        width: '100vw',
        height: '100%',
        position: 'absolute',
        top: '0',
        display: 'flex',
        alignContent: 'center'
    },
    modal:{
        padding:'10px',
        backgroundColor: 'white',
        width: '90vw',
        // height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto'
    },
    inner: {
        border: 'solid black 1px',
        marginTop: '10px',
        width: '98%',
        // height: '98%',
        margin: 'auto'
    }
}

export const Modal = ({Component, isOpen=false, controlModal, id})=>{

    return (
        <div id='test-main'>
            {isOpen&&
            <div id='test-outer' style={style.back}>
                <div id='test-modal' style={style.modal}>
                    <p><Button type={'default'} label={'Close'} onClick={()=>controlModal(id)} isFull={true}/></p>
                    <div id='test-inner' style={style.inner}>
            {<Component />}
                    </div>
                    <p><Button type={'default'} label={'Close'} onClick={()=>controlModal(id)} isFull={true}/></p>
                </div>
            </div>
            }
        </div>
    )
}