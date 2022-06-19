import { BrowserRouter, Route, Routes } from "react-router-dom"
import ForgotPassword from "../component/ForgotPassword"
import Login from "../component/Login"
import SignUp from "../component/SignUp"

const Routing=()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/forgotpassword' element={<ForgotPassword/>}/>
            </Routes>
            </BrowserRouter>

        </div>
    )
}
export default Routing