import { useCallback, useEffect, useState } from "react";
import Data from "../Data/Data";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyRecipiesCard from "../components/MyRecipiesCard";
import Foods from "../components/foods";
import StatusBar from "../components/statusBar";
import Loader from "../components/Loader";
const Home = () => {
  const [Language, setLanguage] = useState('')
  const [data, setdata] = useState(Data.English)
  const [Loading, setLoading] = useState(false)
  useEffect(() => {
    if (Language == 'Uzbek') {
      setdata(Data.Uzbek)
    }else{
      setdata(Data.English)
    }
  }, [Language])
  
  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000);
  }, [Language])
  
  function ChangeLanguale(language) {
    setLanguage(language)
  }

  const {LogoSpan,Logo ,nav1 , nav2, nav3, nav4, } = data
  const { AboutMeTitle , AboutMeTitle2 , AboutMeTitle3 , AboutImg  } = data
  const {MyRecipiesTitle1 ,MyRecipiesTitle2 , MyRecipiesTitle3} = data
  return (
    <>
    {Loading && <Loader/>}
    <section className="navBar">
        <div className="topNav">
          <div className="logo">
            <a href="#welcome">
              <span>{LogoSpan}</span> {Logo}
            </a>
          </div>
          <div className="navItems flex  items-center">
            <a href="#welcome">{nav1}</a>
            <a href="#about">{nav2}</a>
            <a href="#recipies">{nav3}</a>
            <a href="#foods">{nav4}</a>
            <div className="flex gap-3">
              <button className="h-10 w-[100px] " onClick={() => ChangeLanguale('English')}>English</button>
              <button className="h-10 w-[100px]" onClick={() => ChangeLanguale('Uzbek')}>Uzbek</button>
            </div>
          </div>
        </div>
      </section>
      <Header data={data}/>
      <section className="about" id="about">
        <div className="aboutMain">
          <div className="aboutLeft">
            <img
              className="img-responsive"
              src={AboutImg}
              alt=""
            />
          </div>
          <div className="aboutRight">
            <h1>{AboutMeTitle}</h1>
            <p>{AboutMeTitle2}</p>
            <button>
              <a href="https://syket112.github.io/food-network/contact.html">
                {AboutMeTitle3}
              </a>
            </button>
          </div>
        </div>
      </section>
      <section className="recipies" id="recipies">
        <div className="recipiesMain">
          <div className="recipiesHead">
            <h1 className="text-center text-[30px]">{MyRecipiesTitle1}</h1>
            <p className="text-center">{MyRecipiesTitle2}
              <br />{MyRecipiesTitle3}
            </p>
          </div>
          <div className="recipieControl">
            {data.MyRecipiesData.map((item , index) => {
                return(
                    <MyRecipiesCard {...item} key={index}/>
                )
            })}
          </div>
        </div>
      </section>
      <StatusBar data={data}/>
      <Foods data={data}/>
      <Footer data={data}/>
    </>
  );
};

export default Home;