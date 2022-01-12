import React from 'react'
import './Candidate.css'

function Candidate(props) {
    const {id,name,age,sector,skill,img,salary} = props.candidate;
    return (
        <div className='md:rounded-xl bg-gray-100 overflow-hidden'>
            <img src={img} className='img' alt="" />
            <div className="p-4">
                <p className='text-2xl tex-center my-2'>{name}</p>
                <p>Age: {age}</p>
                <p>Sector: {sector}</p>
                <p>skill: {skill}</p>
                <p>color: mix</p>
                <p className='flex justify-between items-center'><span className='text-2xl'>{salary}tk</span> <button onClick={()=>props.handleOffered(id)} className='bg-blue-500 text-white p-2'><i className="far fa-thumbs-up"></i> Offer</button></p>
            </div>
        </div>
    )
}

export default Candidate
