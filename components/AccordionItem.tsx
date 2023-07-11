import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'

//Icon
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


type Props = {
    number: string,
    question: string,
    answer: string,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    idx: number
}

const Accordion = ({number, question, answer, turn, setTurn, idx}: Props) => {

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(contentRef.current){
            contentRef.current.style.maxHeight = turn![idx] ? `${contentRef.current.scrollHeight}px`:"0px"
        }

    },[contentRef, turn, idx])

    const toggleAccordion = () => {
        let newTurn = [...turn!]
        newTurn[idx] = !newTurn[idx]
        setTurn!(newTurn)
    }
  return (
    <div className='flex flex-col items-center justify-center w-full px-2 text-lg pt-4 lg:text-base'>
      <button onClick={toggleAccordion}
       className={`bg-transparent px-5 shadow cursor-pointer w-full h-full ${turn![idx]}`}>
        <div className='py-3'>
           <div className='flex items-center justify-between h-14 text-left'>
                <div>
                    <span className='font-medium lg:text-xl text-sm text-blue1 mr-2'>{number}</span>
                    <span className='ml-2 font-medium lg:text-xl text-sm'>{question}</span>
                </div>
              <div>
               { turn![idx] ? <AiOutlineMinus/> :
                <AiOutlinePlus/>}

              </div>
           </div>
           <div ref={contentRef} className='mx-4 overflow-hidden text-left transition-all duration-500 h-full'>
              <p className='py-1 font-normal leading-normal text-justify whitespace-pre-line text-sm'>
                {answer}
              </p>
           </div>
        </div>
      </button>
    </div>
  )
}

export default Accordion