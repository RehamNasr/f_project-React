import { Fragment } from "react";
import Landing from "../components/Landing";
import Feature from "../components/Feature";
import Stayproductive from "../components/Stayproductive";
import Testmonials from "../components/Testmonials"
import Getstarted from "../components/Getstarted";
const Home=()=>{
    return(
        <Fragment>
           <Landing></Landing>
           <Feature></Feature>
           <Stayproductive></Stayproductive>
           <Testmonials></Testmonials>
           <Getstarted></Getstarted>
        </Fragment>
   

    )
}
export default Home;