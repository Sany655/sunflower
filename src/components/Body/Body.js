import React, { useEffect, useState } from 'react'
import Offered from '../Offered/Offered'
import Candidate from '../Candidate/Candidate'

function Body() {
    const [candidates, setCandidates] = useState([]);
    const [offered, setOffered] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCandidates(data))
    }, [])
    const handleOffered = id => {
        if (offered.length==9) {
            alert('Maximum limit reached');
        }else{
            let candidateObj = candidates.find((candi) => candi.id == id)
            setCandidates(candidates.filter((candi) => candi.id != id));
            console.log(candidates.filter((candi) => candi.id != id));
            setOffered([...offered, candidateObj]);
        }
    }
    const handleUnoffered = id => {
        let offeredObj = offered.find(offe=>offe.id==id)
        setOffered(offered.filter(offe=>offe.id!==id))
        console.log(offeredObj);
        setCandidates([offeredObj,...candidates])
    }
    return (
        <main className='md:w-3/4 mx-auto my-4 flex md:flex-row flex-col-reverse'>
            <section className='md:w-3/4 grid md:grid-cols-3 gap-4'>
                {
                    candidates.map((candidate, index) => <Candidate key={index} candidate={candidate} handleOffered={handleOffered} />)
                }
            </section>
            <Offered offered={offered} handleUnoffered={handleUnoffered} />
        </main>
    )
}

export default Body
