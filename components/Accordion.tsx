import React, { Dispatch, SetStateAction } from 'react'
import Accordion from './AccordionItem';

//Icon
import { AiOutlineDownCircle } from "react-icons/ai";
import { contents } from '@/data/content';

type Props = {
    number: string,
    question :string,
    answer: string,
    idx: number
}

interface LayoutProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    isSomeActive: any,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    accordionItem: Props[]
}

const Layout = ({handleClick, isSomeActive, turn, setTurn}:LayoutProps) => {
  return (
    <div>
      <div className='flex items-center justify-between w-full mb-2 lg:justify-end'>
          <button
              className="flex items-center mr-3 space-x-1 text-sm font-bold lg:text-base lg:space-x-2 py-2 px-4 bg-slate-50"
              onClick={handleClick}
            >
              <span className="lg:block hidden text-sky-500 min-w-fit text-ellipsis"> {!isSomeActive ? "Open All" : "Close All"}</span>
              <div
                className={
                  "relative transition-all ease-in-out duration-200 " +
                  (isSomeActive ? " rotate-180" : "rotate-0")
                }
              >
               <AiOutlineDownCircle className='text-4xl lg:block hidden'/>
              </div>
            </button>
      </div>

      {contents.questions.accordionItem.map((el,i)=>{
        return (
            <div className='w-full' key={"questions"+i}>
                <Accordion
                number={el.number}
                question={el.question}
                answer={el.answer}
                turn={turn}
                setTurn={setTurn}
                idx={el.idx}
                />
            </div>
        )
      })}
    </div>
  )
}

export default Layout