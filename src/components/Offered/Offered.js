import React, { useEffect, useState } from 'react'

function Offered(props) {
    const [total,setTotal] = useState(0);
    const {offered} = props;
    useEffect(()=>{
        let totl = 0;
        for (const offe of offered) {
            totl += offe.salary;
        }
        setTotal(totl)
    },[offered])
    return (
        <div className='bg-gray-100 md:w-1/4 p-5 md:ml-4 md:mb-0 mb-3'>
            <h1 className="text-3xl my-3">Offered - {offered.length}</h1>
            <p className="text-xl">Total Offered : {total}Tk</p>
            {
                offered.map((person,i)=><p key={i} className="text-2xl bg-white p-3 my-2 flex justify-between items-center"><span>{person.name}</span><i onClick={()=>props.handleUnoffered(person.id)} className="far fa-thumbs-down cursor-pointer"></i></p>)
            }
        </div>
    )
}

export default Offered
