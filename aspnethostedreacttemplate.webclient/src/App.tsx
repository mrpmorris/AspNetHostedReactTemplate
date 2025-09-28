import { useEffect, useState } from 'react'

type WeatherForecast = {
   date: string | Date
   temperatureC: number
   temperatureF: number
   summary: string | null
}

function App() {
   const [weather, setWeather] = useState<WeatherForecast[] | null>(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState<string | null>(null)

   useEffect(() => {
      const fetchWeather = async () => {
         try {
            const res = await fetch('/api/weatherforecast')
            if (!res.ok) throw new Error(`HTTP ${res.status}`)
            const data = await res.json()
            setWeather(data)
         } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error')
         } finally {
            setLoading(false)
         }
      }

      fetchWeather()
   }, [])

   return (
      <>
         <h2>Weather Forecast</h2>
         {loading && <p>Loading...</p>}
         {error && <p style={{ color: 'red' }}>Error: {error}</p>}
         {!loading && !error && weather && (
            <ul>
               {weather.map((w, i) => (
                  <li key={i}>
                     <strong>{typeof w.date === 'string' ? w.date : new Date(w.date).toLocaleDateString()}</strong>
                     : {w.summary ?? 'N/A'} - {w.temperatureC}C / {w.temperatureF}F
                  </li>
               ))}
            </ul>
         )}
      </>
   )
}

export default App
