import Data from '../Data/Data'
import FoodsCard from './FoodsCard'

const Foods = ({data}) => {
  return (
    <>
<section className="foods" id="foods">
    <div className="foodsMain">
        <div className="foodsHead">
            <h1 className="text-center" >Popular Foods</h1>
        </div>
        <div className="foodArea">
            {data.PopularFoods.map((item , index) =>{
                return(
                    <FoodsCard {...item} key={index}/>
                )
            })}
        </div>
    </div>
    <div className="foodArea">
            {data.PopularFoods2.map((item , index) =>{
                        return(
                            <FoodsCard {...item} key={index}/>
                        )
            })}
    </div>
</section>
</>
  )
}

export default Foods