function Hero() {
  return (
    <div className="">
      <div className="w-screen min-h-[85vh] relative flex flex-col md:flex-row-reverse bg-primary">
        <div className="w-[100%] md:w-[50%] flex justify-center items-center">
          <video className="h-[400px] w-[80%]" autoPlay muted loop>
            <source
              src="https://staging.api.moviemint.net/uploads/video/admin/video1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="w-[100%] md:w-[50%] text-white px-4 space-y-4 flex justify-center md:justify-end items-center">
          <div className="py-4 w-[80%] space-y-4 text-center md:text-start">
            <h1 className="text-[32px] md:text-[38px] font-[700]">
              Welcome To The Revolution
            </h1>
            <h4 className="text-[16px]">
              MovieMint liberates Filmmakers and fans through decentralized
              funding. Our Blockchain platform seamlessly connects Independent
              Creators and Passionate Supporters. Filmmakers tokenize projects
              into NFT movie shares that fans can buy and tradel. This raises
              production funds while retaining full ownership and creative
              control while fans.
            </h4>
        <button
          className="px-8 py-2 bg-[#808080] hover:bg-gray-500 text-white txt-[18px] font-[600]
        duration-300 ease-in-out transition-all"
        >
         Explore
        </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
