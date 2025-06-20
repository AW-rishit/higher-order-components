import withAuth from "./withAuth"
import Dashboard from "./Dashboard"

function App() {

  const AuthDash = withAuth(Dashboard)

  return (<>
    <AuthDash/>
  </>)
}

export default App
