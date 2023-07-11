import { useState } from 'react'
import Accordion from '@/components/Accordion'

//Content
import { contents } from '@/data/content'

type Props = {
  
}

export default function Questions({}: Props) {
  const [active, setActive] = useState([false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false,false])
      : setActive([true, true, true, true, true, true]);
  };

  return (
    <div className='md:py-12'>
      <div className='container md:grid grid-cols-3 gap-10 text-center'>
        <div className='md:mt-20 my-8'>
            <h3 className='text-3xl font-semibold'>{contents.questions.title}</h3>
            <p className='mt-5 text-blue1 font-medium'>{contents.questions.desc}</p>
        </div>
        <div className='col-span-2 place-items-center w-full mb-8'>
          <Accordion
              handleClick={handleClick}
              isSomeActive={isSomeActive}
              accordionItem={contents.questions.accordionItem}
              turn={active}
              setTurn={setActive}
            />
        </div>
      </div>
    </div>
  )
}