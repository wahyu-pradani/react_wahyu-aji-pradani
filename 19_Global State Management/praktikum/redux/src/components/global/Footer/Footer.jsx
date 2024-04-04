export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-16">
      <div className="container mx-auto max-w-screen-xl w-full">
        <div className="grid grid-cols-4 ">
          <div className="footer-col">
            <div className="addres text-[14px] leading-[16px] grid gap-2">
              <h1 className="text-[28px] font-semibold text-[#37517E] mb-2">
                ARSHA
              </h1>
              <p>A108 Adam Street </p>
              <p> Newyork, NY 535022</p>
              <p> United States</p>
            </div>
            <div className="contact text-[14px] ">
              <p>
                {" "}
                <span className="font-bold text-[#5E5E5E]">Phone :</span> +1
                5589 55488 55
              </p>
              <p>
                {" "}
                <span className="font-bold text-[#5E5E5E]">Email :</span>{" "}
                info@example.com
              </p>
            </div>
          </div>
          <div className="footer-col grid gap-2">
            <h4 className="text-[16px] text-[#37517E] font-bold">
              Useful Links
            </h4>
            <ul className="pl-[25px]">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Term of service</a>
              </li>
              <li>
                <a href="#">Privasy policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-col grid gap-4">
            <h4 className="text-[16px] text-[#37517E] font-bold">
              Our Service
            </h4>
            <ul className="pl-[25px] grid gap-2">
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Designer</a>
              </li>
            </ul>
          </div>
          <div className="footer-col grid gap-1">
            <h4 className="text-[16px] text-[#37517E] font-bold">
              Our Social Network
            </h4>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="social-links">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#37517E] mt-10">
        <div className=" container mx-auto max-w-screen-xl w-full h-[81px] flex justify-between items-center text-white">
          <div id="FootLeft">
            <p className="font-normal">
              &copy; CopyRight <span className="font-bold">Wahyu Aji Pradani </span>. All Rights
              Reserved
            </p>
          </div>
          <div id="FootRight">
            <p className="text-[13px]">
              Designed by <span className="text-[#47B2E4]">BootstrapMade</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
