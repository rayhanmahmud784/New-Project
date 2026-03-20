import { Card, CardHeader, Image, CardBody , CardFooter , Link } from "@heroui/react";


function Thelast() {

    const Rayhan = [
    {
      sm: "./buildingsm.png",
      dris:"Building",
      Imagee: "./room.png",
      downtext: "Whitechapel Rd.",
      country: "Tulare County, Los Angles, CA 23415",
      prize: "$1,456,654.00",
    },
    {
      sm: "./buildingsm.png",
      dris:"Building",
      Imagee: "./house.png",
      downtext: "Whitechapel Rd.",
      country: "Tulare County, Los Angles, CA 23415",
      prize: "$1,456,654.00",
    },
      {
      sm: "./buildingsm.png",
      dris:"Building",
      Imagee: "./bilding.png",
      downtext: "Whitechapel Rd.",
      country: "Tulare County, Los Angles, CA 23415",
      prize: "$1,456,654.00",
    },
      {
      sm: "./buildingsm.png",
      dris:"Building",
      Imagee: "./area.png",
      downtext: "Whitechapel Rd.",
      country: "Tulare County, Los Angles, CA 23415",
      prize: "$1,456,654.00",
    },
];

const activities = [
    {
      img: "./room.png", // Replace with your image path
      name: "Activity name",
      location: "Location name • 16.12212, -122.1424",
      price: "$1,456,654.00"
    },
    {
      img: "./room.png",
      name: "Activity name",
      location: "Location name • 16.12212, -122.1424",
      price: "$1,456,654.00"
    }
  ];

  const Documents = [
    {
      img: "./room.png", // Replace with your image path
      name: "Documents name",
      location: "Location name • 16.12212, -122.1424",
      price: "$1,456,654.00"
    },
    {
      img: "./room.png",
      name: "Documents name",
      location: "Location name • 16.12212, -122.1424",
      price: "$1,456,654.00"
    }
  ];

  return (
       <section className='max-w-[753px] w-full mx-auto px-4 md:px-0'>

        {/* first section */}
        <div className="flex flex-row items-start gap-4 md:mb-10 mb-5 md:mt-10 mt-5 ">
          <div className="bg-gray-200 rounded-full w-[46px] h-[46px] flex items-center justify-center flex-shrink-0">
            <img src="./money.png" className="w-[19px] h-[19px]" alt="" />
          </div>

<div>
    <p className="text-gray-400 text-lg font-semibold">Location</p>
    <h1 className="text-2xl font-bold">Tulare County,  Los Angles, CA 23415</h1>
</div>
        </div>

  {/* Separator Line - Simplified */}
  <div className="w-full h-[1px] bg-gray-200 my-8"></div>

        {/* secound section */}

          <div className="flex flex-row items-start gap-4 md:mb-10 mb-5">
                      <div className="bg-gray-200 rounded-full w-[46px] h-[46px] flex items-center justify-center flex-shrink-0">
<img src="./Frame.png" className="w-[19px] h-[19px]" alt="" />
</div>
<div className="flex flex-col space-y-3">
    <p className="text-gray-400 text-lg font-semibold">Approx. Cost:</p>
    <h1 className="text-2xl font-bold">$60,607,456.00</h1>
</div>
        </div>
        

            {/* line */}
        <div className="relative flex items-center justify-between w-full max-w-2xl mx-auto my-12 px-2">
  <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-gray-200 translate-y-1/2 z-0"></div>
</div>

        {/* driscription section */}

        <div className="flex flex-col space-y-3">
            <p className="text-2xl font-bold">Description</p>
            <h3 className="text-sm text-gray-400">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac <br />
             mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar <br />
             sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</h3>
        </div>

{/* Separator Line - Simplified */}
  <div className="w-full h-[1px] bg-gray-200 my-8"></div>

        {/* card section */}
        
         <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-10 gap-5 lg:grid-cols-3 p-4">
      {Rayhan.map((end, a) => (
        <Card key={a} className="relative overflow-hidden ">
          {/* Header section with text */}
          <CardHeader 
    className="absolute mt-1 top-3 right-7 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1.5 w-auto shadow-sm"
  >
    <Image
      alt="Small icon"
      src={end.sm}
      width={15}
      height={15}
    />
    <p className="text-[8px] font-bold text-black uppercase">{end.dris}</p>
  </CardHeader>

          {/* Body section with Big Image */}
          <CardBody className="overflow-visible py-2">
            <Image
            className="object-cover"
            height={200}
            width="100%"
              alt="Project Image"
              src={end.Imagee}
            />
          </CardBody>

          {/* Footer section with small icon/text */}
         <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{end.downtext}</p>
            <small className="text-default-500">{end.country}</small>
            <h4 className="font-bold text-tiny">{end.prize}</h4>
          </CardFooter>
        </Card>
      ))}
    </div>

    {/* Separator Line - Simplified */}
  <div className="w-full h-[1px] bg-gray-200 my-8"></div>

    {/* another section */}

    <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-black">Activities</h2>
        <Link href="#" className="text-sm text-black underline font-medium">
          See all
        </Link>
      </div>

      {/* 2. List of Cards */}
      <div className="flex flex-col gap-4">
        {activities.map((arma, y) => (
          <Card key={y} className="bg-[#F4F4F4] border-none shadow-none rounded-[20px]">
            <CardBody className="flex flex-row items-center gap-5 p-4">
              
              {/* Image Section */}
              <div className="flex-shrink-0">
                <Image
                  src={arma.img}
                  alt={arma.name}
                  width={90}
                  height={90}
                  className="rounded-xl object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-black">{arma.name}</h3>
                <p className="text-sm text-gray-400 font-medium">
                  {arma.location}
                </p>
                <p className="text-lg font-bold text-black mt-1">
                  {arma.price}
                </p>
              </div>

            </CardBody>
          </Card>
        ))}
      </div>

      {/* Separator Line - Simplified */}
  <div className="w-full h-[1px] bg-gray-200 my-8"></div>
  

  {/* document section */}

    <div className="flex justify-between items-center md:mt-10 mt-5">
        <h2 className="text-xl font-bold text-black">Documents</h2>
        <Link href="#" className="text-sm text-black underline font-medium">
          See all
        </Link>
      </div>

      {/* 2. List of Cards */}
      <div className="flex flex-col gap-4 ">
        {Documents.map((sha, b) => (
          <Card key={b} className="bg-[#F4F4F4] border-none shadow-none rounded-[20px]">
            <CardBody className="flex flex-row items-center gap-5 p-4">
              
              {/* Image Section */}
              <div className="flex-shrink-0">
                <Image
                  src={sha.img}
                  alt={sha.name}
                  width={90}
                  height={90}
                  className="rounded-xl object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-black">{sha.name}</h3>
                <p className="text-sm text-gray-400 font-medium">
                  {sha.location}
                </p>
                <p className="text-lg font-bold text-black mt-1">
                  {sha.price}
                </p>
              </div>

            </CardBody>
          </Card>
        ))}
      </div>



    </section>
  )
}

export default Thelast;