import React from 'react'

function Tarjeta(props){
    return(
        <div class='col'>
            <div class="card h-100" width= "18rem">

            <img src={props.Personaje.image} alt=''  class="card-img-top"></img>
            
            <div class="card-body">
            
                
                <h3 class="card-title">{props.Personaje.name}</h3>
                
                <li class="list-group-item"><strong>Status:</strong> {props.Personaje.status}</li>
                <li class="list-group-item"><strong>Especie:</strong> {props.Personaje.species}</li>
                <li class="list-group-item"><strong>Origen:</strong> {props.Personaje.origin.name}</li>


            </div>


            </div>

        </div>

    )
}

export default Tarjeta