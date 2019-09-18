import React, {useState} from 'react'
import useInterval from '../../utils/use-interval'
import './text-loop.scss'

function TextLoop(props){

    const [margin, setMargin] = useState(0);
    const [iterations, setIterations] = useState(1);
    useInterval(() => {
      if(iterations >= props.array.length -1){
        setIterations(0);
      }else{
        setIterations(iterations + 1);
      }
      setMargin(-iterations * 55);
    }, props.interval);
    return (
        <div className="content">
            {props.array.map((text,index) =>{
                return (<h1 className={'desc ' + ((index === 0)? 'first ' : 'nein ')} style={{marginTop: (index===0)? margin + 'px': '0px'}}> {text}</h1>)
            })}
          </div>
    )
}

export default TextLoop;