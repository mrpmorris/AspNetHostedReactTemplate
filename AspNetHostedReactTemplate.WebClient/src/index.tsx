import { Link } from 'react-router-dom';
function Index() {
   return (
      <>
         <h1>Home</h1>
         <Link to="/weather-forecast">Click here</Link> to view weather forecasts.
      </>
   )
}

export default Index
