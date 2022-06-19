import React from 'react';

function Box(props) {
    const styles = {
        backgroundColor: props.isOn? "black" : "white"
      };

    return (
        <div style={styles} className='boxes' onClick={() => props.handleClick(props.id)}></div>
    );
};

export default Box;