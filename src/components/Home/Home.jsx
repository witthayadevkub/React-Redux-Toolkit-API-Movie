import React,{ useState, useEffect} from 'react'
import ApiMovie from '../../api/ApiMovie'
import { APIKey } from '../../api/Apikey'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../store/Reducer'

// Components
import MovieList from '../MovieList/MovieList'


const Home = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    useEffect(()=>{
        const getMovies = async () => {
            const searchkey = search ? search : 'cars'
            const res = await ApiMovie.get(`?apikey=${APIKey}&s=${searchkey}&type=movie`)

            setTimeout(()=>{
                dispatch(addMovie(res.data.Search))
            },500)
        }
        getMovies()
    },[search])

  return (
    <div className='container-Home'>
        <div className='Home'>
            <h3 style={{ margin: "1rem 0"}}>Movies</h3>
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <MovieList />
    </div>
  )
}

export default Home