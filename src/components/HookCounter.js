import React, { useState, useEffect } from 'react'

function HookCounter() {
      // useState
    const [count, setCount] = useState(0)

     //useEffect
    useEffect(() => {

      document.title = `You Clicked {count} times`
    })

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter;
