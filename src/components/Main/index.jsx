
import { Link } from "react-router-dom"
import data from "../../data"
import './stylemain.css'
const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }
    
    return (
        <>
            <div className="head">
                <div><h1 className="Recipe"><Link to="/logout">Recipe Book</Link></h1>
                <button onClick={handleLogout} className="logout">
                    Logout
                </button>
                </div>
                <input type="text" placeholder="search recipe name" />
                <div>
                    <Link to="/form">
                        <button className="new">new</button>
                    </Link>
                    
                </div>
    
                {
                    data.map((item)=>{
                        return(
                            <>
                            <img src={item.image.url}  height="350" width="350"/>
                            <p>{item.ingredients}</p>
                        
                             <h1>{    JSON.stringify(item)}</h1>
                            </>
                        )
                        

                    })
                }
                

            
                

            </div>
        </>
    )
}

export default Main