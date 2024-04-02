


const TechDomainDetails = ({ image, name, description, buttonLink }) => {
    return (
       
      <div className="w-full rounded-xl  md:items-center md:flex md:my-5 my-3  px-5 py-0  md:py-5 justify-center bg-[#0000009a] xl:px-20 lg:px-12">
        <div className="md:w-1/3 p-2 md:py-5">
          <img src={image} alt="" />
        </div>
        <div className="md:w-2/3 px-3  md:p-5">
          <div className="text-4xl md:py-4 font-bold text-center text-orange-500">{name}</div>
          <div className="text-sm py-5 md:py-0 text-justify md:text-start">{description}</div>
          <div className="flex justify-center  md:flex-1 md:justify-start "><a href={buttonLink}><button className="px-4 p-1 my-5 mt-10  text-lg rounded-xl bg-orange-500">More info</button></a></div>
        </div>
      </div>

    );
  };
  
  export default TechDomainDetails;
  