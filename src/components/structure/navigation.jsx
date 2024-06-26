import { About } from "../pages/About"
import { Account } from "../pages/Account"
import { Home } from "../Home/Home"
import { Login } from "../Login/Login"
import { Private } from "../pages/Private"
import { Register } from "../Register/Register"
import { ListUsersComponent } from '../pages/ListUsersComponent'
import { UserBoard } from "../pages/UserBoard"
import { Main } from "../Main/Main"

export const nav = [
     { path:     "/",         name: "Home",        element: <Home />,       isMenu: true,     isPrivate: false  },
     { path:     "/about",    name: "About",       element: <About />,      isMenu: true,     isPrivate: false  },
     { path:     "/login",    name: "Login",       element: <Login />,      isMenu: false,    isPrivate: false  },
     { path:     "/private",  name: "Private",     element: <Private />,    isMenu: true,     isPrivate: true  },
     { path:     "/account",  name: "Account",     element: <Account />,    isMenu: true,     isPrivate: true  },
     { path:     "/register", name: "Register",    element: <Register />,   isMenu: false,    isPrivate: false },
     { path:     "/userlist", name: "User",    element: <ListUsersComponent />,   isMenu: false,    isPrivate: true },
     { path:     "/edit-user/:id", name: "Register",    element: <Register />,   isMenu: false,    isPrivate: false },
     { path:     "/user-board", name: "Userboard",    element: <UserBoard />,   isMenu: true,    isPrivate: true },
     { path:     "/main", name: "Main",    element: <Main />,   isMenu: true,    isPrivate: false },
]