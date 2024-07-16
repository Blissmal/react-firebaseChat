import { useEffect } from "react"
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./lib/firebase"
import { useUserStore } from "./lib/userStore"

const App = () => {

  const { currentUser, isLoading, fetchUserInfo } = useUserStore() 

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user)
    })

    return () => {
      unSub()
    }
  }, [])

  if (isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='container'>
      {
        user ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
          )
}
  <Notification />
    </div >
  )
}

export default App