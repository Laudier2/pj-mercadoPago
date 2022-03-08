import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {

  const history = useHistory()

  const [ dados, setDados ] = useState([])

  const URL = 'http://localhost:3001'

  useEffect(() => {
    const Teste = async () => {
      const req = await axios.get(URL)
      //console.log(req.data)
      setDados(req.data)
    }
    Teste()
  }, [])

  const chenger = (ev) => {
    console.log("Fucionndo ", ev)
  }

  const Receb = async () => {
    await axios.post('http://localhost:3000/crear-orden').then((r) =>{
      console.log(r.data)
      history.push(`${r.data}`)
    }).catch(err => {
      console.log(err)
    })
  }

    return ( 

    <div classNameName="mt-5 conatiner">
    <div className="container col-sm-11 mr1">
        {dados.map(res => (
          <div className="div-lado">
            <div key={res.id}>
              <div className="box1 mt-4">
                <div className="box1">
                  
                  <img src="https://itronicrioverde.com.br/wp-content/uploads/2021/01/iphone11-white-select-2019.png" alt="imagem" className="col-2"/>
                 
                  <h5 className="">{res.title}</h5>
                  <small className="">R$ {res.unit_price}</small>   
                  
                  <Link onClick={() => chenger(res)} >{/*target="_blank"*/}
                    <button className="btn btn-outline-danger btn-block m-3">Comprar</button>
                  </Link>  
                  <Link onClick={() => Receb() } >{/*target="_blank"*/}
                    <button className="btn btn-outline-success btn-block m-3">Teste</button>
                  </Link>                     
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
     );
}
 
export default Home;