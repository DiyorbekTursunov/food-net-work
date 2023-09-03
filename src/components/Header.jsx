
import Data from "../Data/Data"
import OrderBtn from "./OrderBtn"
const Header = ({data}) => {
    const {HeaderTitle1 , HeaderTitle2 , HeaderTitle3 , HeaderTitle4 ,HeaderTitle5 , HeaderTitle6 ,HeaderText ,HeaderText2 , HeaderImg} = data
  return (
    <section className="welcome" id="welcome">
    <div className="welcomeMain">
        <div className="welcomeLeft">
            <h1>{HeaderTitle1}<br/>{HeaderTitle2}
            <br/>{HeaderTitle3} <span>{HeaderTitle4}</span> {HeaderTitle5} </h1> 

            <p>{HeaderText}
                <br/>{HeaderText2}
            </p>
            <OrderBtn>{HeaderTitle6}</OrderBtn>
        </div>

        <div className="welcomeRight">
            <img src={HeaderImg} alt=""/>
        </div>
        
    </div>
</section>
  )
}

export default Header