import Data from "../Data/Data";

const Footer = ({Language}) => {
    const {FooterTitle1 , FooterTitle2, FooterTitle3} = Language == "English" ? Data.English : Data.Uzbek
    console.log();
  return (
    <section className="footer">
      <h1 className="text-center">
        <span>{FooterTitle1}</span> {FooterTitle2}
      </h1>
      <h3 className="text-center">{FooterTitle3}</h3>
    </section>
  );
};

export default Footer;
