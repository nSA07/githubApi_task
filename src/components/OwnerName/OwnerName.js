import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";


const OwnerName = () => {
  const res = useSelector((state) => state.data.data)
  const [data, setData] = useState()

  useEffect(() => {
    setData([{res}])
  },[res]);

  return (
    <>
      {data?.map(el =>       
      <div className='owner'>
          <a href={el.res.owner?.html_url} className='owner__organizations'>{el.res.owner?.login}</a>
          <span>{'>'}</span>
          <a href={el.res.html_url} className='owner__organizations'>{el.res.name}</a>
        </div>)}
    </>
  )
}

export default OwnerName
// 