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
     { path:     "/",         name: "HOME",        element: <Home />,       isMenu: true,     isPrivate: false  },
     { path:     "/about",    name: "ABOUT US",       element: <About />,      isMenu: true,     isPrivate: false  },
     { path:     "/login",    name: "LOGIN",       element: <Login />,      isMenu: false,    isPrivate: false  },
     { path:     "/private",  name: "PRIVATE",     element: <Private />,    isMenu: true,     isPrivate: true  },
     { path:     "/account",  name: "ACCOUNT",     element: <Account />,    isMenu: true,     isPrivate: true  },
     { path:     "/register", name: "REGISTER",    element: <Register />,   isMenu: false,    isPrivate: false },
     { path:     "/userlist", name: "USER",    element: <ListUsersComponent />,   isMenu: false,    isPrivate: true },
     { path:     "/edit-user/:id", name: "REGISTRE",    element: <Register />,   isMenu: false,    isPrivate: false },
     { path:     "/user-board", name: "USER BOARD",    element: <UserBoard />,   isMenu: true,    isPrivate: true },
     { path:     "/main", name: "MAIN",    element: <Main />,   isMenu: true,    isPrivate: false },
]