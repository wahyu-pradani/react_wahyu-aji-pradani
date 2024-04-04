import Button from "../../components/global/Button";

export default function Article (){
    return(
        <section className="bg-[#F3F5FA] py-12">
			<article className="container mx-auto max-w-screen-xl h-full w-full">
				<div className="grid justify-center text-center gap-6">
                    <div class="grid gap-3">
                        <h3 className="text-[#37517E] text-[24px] font-semibold">Join Our Newsletter</h3>
                        <p className="text-[15px] text-[#444444] font-normal">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    </div>
                    <form action="" method="POST" className="w-[636px] flex rounded-full shadow-md h-fit justify-end relative">
                        <input type="text" name="Subs" id="Subs" required
                        className="w-full text-[14px] rounded-full h-[42px] border-none outline-none" 
                        />
                        <div className="absolute right-0 top-2 bottom-0">
                            <Button>
                                <span className="py-[12px] px-[24px] text-[16px] font-normal bg-[#47B2E4] rounded-full text-white">Subscribe</span>
                            </Button>
                        </div>
                    </form>
                </div>
			</article>
		</section>
    );
}