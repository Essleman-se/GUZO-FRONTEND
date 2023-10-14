import { About } from "../pages/About"
import { Account } from "../pages/Account"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Private } from "../pages/Private"
import { Register } from "../pages/Register"
import { ListUsersComponent } from '../pages/ListUsersComponent'

export const nav = [
     { path:     "/",         name: "Home",        element: <Home />,       isMenu: true,     isPrivate: false  },
     { path:     "/about",    name: "About",       element: <About />,      isMenu: true,     isPrivate: false  },
     { path:     "/login",    name: "Login",       element: <Login />,      isMenu: false,    isPrivate: false  },
     { path:     "/private",  name: "Private",     element: <Private />,    isMenu: true,     isPrivate: true  },
     { path:     "/account",  name: "Account",     element: <Account />,    isMenu: true,     isPrivate: true  },
     { path:     "/register", name: "Register",    element: <Register />,   isMenu: false,    isPrivate: false },
     { path:     "/userlist", name: "UsersList",    element: <ListUsersComponent />,   isMenu: true,    isPrivate: true },
]