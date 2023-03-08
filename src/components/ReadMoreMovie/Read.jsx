import React,{ useState, useEffect} from 'react'
import './Read.css'

import ApiMovie from '../../api/ApiMovie'
import { APIKey } from '../../api/Apikey'
import { useParams } from 'react-router-dom'

const Read = () => {
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() =>{
        const fetch = async () => {
            const res = await ApiMovie.get(`?apikey=${APIKey}&i=${id}&plot=full`)
                        .catch((error) =>{
                            console.log('Error',error)
                        })
            setMovie(res.data)
            setLoading(true)
        }
        fetch()
    },[])

  return (
    <>
        {loading ?(
            <div className='read'>
                <div className="img">
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                
                <div className="detail">
                    <h3>{movie.Title}</h3>
                    <br />
                    <p>{movie.Plot}</p>
                    <br />
                    <strong>Released : {movie.Released}</strong>
                </div>
            </div>
        ):(
            <h4 className='loading' style={{ margin: "1rem 0"}}>Loading.....</h4>
        )}
    </>
  )
}

export default Read