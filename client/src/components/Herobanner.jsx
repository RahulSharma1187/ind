import NorthIcon from '@mui/icons-material/North';
import Button from '@mui/material/Button';
import "./herobanner.css";

export const Herobanner = ({bookaCallRef }) => { 
   
  const scrollToBookaCall = () => {
    if (bookaCallRef.current) {
      bookaCallRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("bookaCallRef.current is null");
    }
  };

  return (
    <div className="heroBanner">
        <div className="bnrbtmArw" onClick={scrollToBookaCall}>
          <NorthIcon />
        </div>
        <div className="heroBannerCont">
            <h3 className="">Lorem ipsum dolor sit</h3>
            <h2>Lorem <span>ipsum dolor</span> sit</h2>
            <p className="underline">Lorem ipsum dolor sit amet.</p>
            <Button variant="contained" className="btn m-80">Lorem Ipsum</Button>
        </div>       
    </div>
  )
}
