import { useState } from 'react'

import TopNav from './components/TopNav'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
};

const decrease = () => {
    setCount(count - 1);
};

  return (
    <>
      <TopNav />
      <Counter count={count} />
      <div className='d-flex justify-content-center align-items-center flex-column'>
      <button className="btn btn-primary m-2" onClick={increase}>Increase</button>
      <button className="btn btn-danger m-2" onClick={decrease}>Decrease</button>
        </div>
    </>
  )
}

export default App
