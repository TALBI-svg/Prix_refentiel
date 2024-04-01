import React, { useState } from 'react'

function Home() {

  const[estimate,setEstimate]=useState({
    estimation:'',
    nbrOffres:''
  })

  const handleForm=(e)=>{
    setEstimate({
      ...estimate,
      [e.target.name]:e.target.value
    })
  }

  // console.log(`esti:${estimate.estimation}, nbroff${estimate.nbrOffres}`)
  // const formPR=(
  //   <form className='bg-white p-3 rounded shadow-sm'>
  //     <div className='mb-3'>
  //       <h2>Calculer prix Référentiel</h2>
  //     </div>
  //     <div className="mb-3">
  //       <label htmlFor="exampleInputEmail1" className="form-label">Estimation initial (E):</label>
  //       <input type="number" name='estimation' onChange={handleForm} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  //     </div>
  //     <div className="mb-3">
  //       <label htmlFor="exampleInputPassword1" className="form-label">Nombre des offres financières (NOF):</label>
  //       <input type="number" name='nbrOffres' onChange={handleForm} className="form-control" id="exampleInputPassword1"/>
  //     </div>
  //     <button type="submit" onClick={handleCalculate} className="btn btn-primary me-1">Calculer</button>
  //     <button type="submit" className="btn btn-primary">Suivant</button>
  //   </form>
  // )

  let P=0
  let offre_proche=0
  let entries_offres=[]


  const[msg,setMsg]=useState('')
  const[result,setResult]=useState({
    prix_referentiel:'',
    offre_plus_proche:''
  })
  const calculerReferentiel=()=>{
    if (estimate.estimation==='' && estimate.nbrOffres==='') {
      return setMsg('Tous les champes sont obligatoires!')
    } else {
      try {
        const E=parseFloat(estimate.estimation)
        const NOF=parseFloat(estimate.nbrOffres)
        const offres=entries_offres.map(item=>parseFloat(item))
      
        const SM=offres.reduce((acc,curr)=>curr+acc ,0)
        P=(E+(SM/NOF))/2
        offre_proche=Math.min(...offres.map(x=> Math.abs(x-P)))
        // const obj={
        //   'pr':P,
        //   'ofpp':offre_proche
        // }
        // return  obj
        setMsg('')
        setResult({
          ...result,
          prix_referentiel:P,
          offre_plus_proche:offre_proche
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    calculerReferentiel()
  }
  



  const inputOffres=(
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Offre:</label>
        <input type="number" name='offres_prix' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
  )
  // let arr=[inputOffres]
  // console.log(arr.length)


  const createElement=()=>{
    if(estimate.nbrOffres>)
  }

  
  
  const style_pr={color:"green", fontSize:20}
  const msg_style={color:"red",fontSize:15}
  const formCPR=(
    <form className='bg-white p-3 rounded shadow-sm'>
      <div className='mb-3'>
        <h2>Calculer prix Référentiel</h2>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Estimation initial (E):</label>
        <input type="number" name='estimation' onChange={handleForm} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Nombre des offres financières (NOF):</label>
        <input type="number" name='nbrOffres' onChange={handleForm} className="form-control" id="exampleInputPassword1"/>
      </div>

      


      <button type="submit" onClick={handleCalculate} className="btn btn-primary me-1">Calculer</button>
      <button type="submit" className="btn btn-primary">Suivant</button>
      {/* show result of the first instruction from the calculerReferentiel function */}
      {result.prix_referentiel==='' && result.offre_plus_proche===''?(
        <span></span>
      ):(
        <>
          <hr/>
          <p><span style={style_pr}>Prix referentiel: </span>{result.prix_referentiel}</p>
          <p><span style={style_pr}>Offres plus proche: </span>{result.offre_plus_proche}</p>
        </>
      )}

      {/* check form inputs validation */}
      {msg===''?(
        <span></span>
      ):(
        <p style={msg_style}>{msg}</p>
      )}
    </form>
  )
  
  return (
    <div className='container-fluid'>
        <div className='row border'>
            <div className='col-12 col-md-5 col-lg-5 Left-side'>
                <div className='col-12 col-md-6 col-lg-6 Form-area'>
                  {formCPR}
                </div>
            </div>
            <div className='col-12 col-md-5 col-lg-5 Rigth-side'>
                
            </div>
            
        </div>
    </div>
  )
}

export default Home