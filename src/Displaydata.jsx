import React from 'react'

function Displaydata({data}) {
    


    

    
  return (
      <>{
          data.map((item)=>{
              return(
                  <>
                  <h1>
                      password:{item.password}
                  </h1>
                  <h1>
                      email:{item.email}
                  </h1>
                  </>


              )

          })
      }
      
      

      </>
   
  )
}

export default Displaydata