import ImgHero from "../../assets/hero-img.png";
import {Link} from 'react-router-dom';
import Button from "../../components/global/Button";
export default function Hero() {
  return (
      <section className="bg-[#37517E] w-full">
        <div className="container mx-auto max-w-screen-xl h-full w-full">
          <div className="pt-[80px] pb-[60px] grid grid-cols-2 justify-between items-center">
            <div className="section-hero grid gap-[50px]">
              <div className="grid gap-[10px] w-[615px]">
                <h1 className="text-[48px] font-bold text-white">
                  Better Solution For Your Bussiness
                </h1>
                <p className="text-[24px] font-light text-white">
                  We are team of talented designers making website with
                  Bootstrap
                </p>
              </div>
              <div className="grid grid-cols-2 gap-10 text-start w-fit text-white items-center">
                <div className="bg-[#47B2E4] px-[28px] py-[14px] rounded-full">
                    <Link to="/form">
                        <Button>
                            <span className="text-center text-[16px] font-medium">Get Started</span>
                        </Button>
                    </Link>
                </div>
                <div>
                    <Button>
                        <span className="">Watch Video</span>
                    </Button>
                </div>
              </div>
            </div>
            <figure>
              <img src={ImgHero} alt="hero" />
            </figure>
          </div>
        </div>
      </section>
  );
}
