import React from 'react'

function Content() {
    const [basket, setBasket] = useState([])
    const [{ isOver }, dropRef] = useDrop({
        accept: 'pet',
        drop: (item) => setBasket((basket) => 
                            !basket.includes(item) ? [...basket, item] : basket),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })
    return (
    <div>Content</div>
  )
}

export default Content