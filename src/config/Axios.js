import axios from 'axios'

const auth_token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmMwOGFjYTFkZDEyZDlmYzFhODNlOGJmNDdmYTBjYyIsInN1YiI6IjYzNDgzYzRlZmU1YzkxMDA3OTU5ZmZjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DtOub53MSUILeQslueIjKaLXkKeg1q5cR66C3em0gFQ`

const tmdbAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Authorization': `Bearer ${auth_token}`
    }
})

export default tmdbAPI