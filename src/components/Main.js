import Tarjeta from './Tarjeta';
import Datos from '../rickandmorty.json';

function Main(props){

    return(
        <div class="row row-cols-1 row-cols-md-3 g-4">
            {


                Datos.map(function(UnPersonaje, idx){
                    return (
                        <Tarjeta key={idx} Personaje={UnPersonaje}/>
                    )
                }


                )


            }

        </div>

    )
}

export default Main