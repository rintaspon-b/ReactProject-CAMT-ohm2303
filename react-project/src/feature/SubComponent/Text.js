import React from "react";

//create function Text
function Text({size,children,family,weight,color}){

    //recive size to text
    const style = {
        fontWeight: weight,
        fontSize: size + 'px',
        fontFamily:  family,
        color: color,    };
    return (
        <p style={style}>{children}</p>
    );
}

//export
export default Text;

//example to use
{/* <Text size={25} family={'Times New Roman'}>ขายดี sadsa</Text> */}