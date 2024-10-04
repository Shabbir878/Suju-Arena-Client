const Partners = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-[1170px] mx-auto px-5 xl:px-0">
        {" "}
        {/* Section Header */}
        <h2 className="text-[30px] leading-[40px] md:text-[70px] md:leading-[80px] text-center font-semibold mb-2 md:mb-8 text-[#1A1A1A]">
          Our Trusted <span className="text-[#FF6F20]">Partners</span>
        </h2>
        <p className="text-[16px] leading-[26px] font-mono max-w-[570px] mx-auto text-center text-[#333]">
          Together, we create exceptional sports opportunities ahead.
        </p>
        {/* Logos Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-12">
          {[
            "https://www.logo.wine/a/logo/Lotto_Sport_Italia/Lotto_Sport_Italia-Logo.wine.svg",
            "https://www.logo.wine/a/logo/Asics/Asics-Logo.wine.svg",
            "https://www.logo.wine/a/logo/Yonex/Yonex-Logo.wine.svg",
            "https://www.logo.wine/a/logo/Wilson_Sporting_Goods/Wilson_Sporting_Goods-Logo.wine.svg",
            "https://www.logo.wine/a/logo/Slazenger/Slazenger-Logo.wine.svg",
            "https://www.logo.wine/a/logo/Nike%2C_Inc./Nike%2C_Inc.-Nike-Logo.wine.svg",
            "https://www.logo.wine/a/logo/Fila_(company)/Fila_(company)-Logo.wine.svg",
            "https://www.logo.wine/a/logo/Puma_(brand)/Puma_(brand)-Logo.wine.svg",
            "https://www.logo.wine/a/logo/Adidas/Adidas-Logo.wine.svg",
            "https://www.logo.wine/a/logo/Gucci/Gucci-Logo.wine.svg",
          ].map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt="logo"
                className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
