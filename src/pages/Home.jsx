import pigeon from "../pics/pigeon.png"
import Articles from "../components/ArticleList"

export default function Home() {
    return (
        <div className="homecontainer">
            {/* <div className="newnews"> 
                <img src={pigeon} className="pigeon" alt="pigeons flying -implying they're off to deliver news"/>
            </div> */}
        <Articles />
        </div>
    )
}