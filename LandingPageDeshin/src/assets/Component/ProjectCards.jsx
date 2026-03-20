import { Card, CardHeader, Image, CardBody , CardFooter } from "@heroui/react";
function ProjectCards() {
  const Rayhan = [
    {
      sm: "./Group.png",
      smtext: "Blizzard",
      Imagee: "./broken.png",
      downtext: "Whitechapel Rd.",
      country: "Tulare County, Los Angles, CA 23415",
      prize: "$1,456,654.00",
    },
    {
      sm: "./Group.png",
      smtext: "Blizzard",
      Imagee: "./chilla.png",
      downtext: "Whitechapel Rd.",
      country: "Tulare County, Los Angles, CA 23415",
      prize: "$1,456,654.00",
    },
      {
      sm: "./Group.png",
      smtext: "Blizzard",
      Imagee: "./brokenplain.png",
      downtext: "Whitechapel Rd.",
      country: "Tulare County, Los Angles, CA 23415",
      prize: "$1,456,654.00",
    },
      {
      sm: "./Group.png",
      smtext: "Blizzard",
      Imagee: "./AllFireman.png",
      downtext: "Whitechapel Rd.",
      country: "Tulare County, Los Angles, CA 23415",
      prize: "$1,456,654.00",
    },
      {
      sm: "./Group.png",
      smtext: "Blizzard",
      Imagee: "./firehouse.png",
      downtext: "Whitechapel Rd.",
      country: "Tulare County, Los Angles, CA 23415",
      prize: "$1,456,654.00",
    },
      {
      sm: "./Group.png",
      smtext: "Blizzard",
      Imagee: "./housedistroy.png",
      downtext: "Whitechapel Rd.",
      country: "Tulare County, Los Angles, CA 23415",
      prize: "$1,456,654.00",
    },

  ];

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {Rayhan.map((item, index) => (
        <Card key={index} className="relative overflow-hidden">
          {/* Header section with text */}
          <CardHeader 
    className="absolute mt-1 top-3 right-7 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1.5 w-auto shadow-sm"
  >
    <Image
      alt="Small icon"
      className="rounded-full"
      src={item.sm}
      width={15}
      height={15}
    />
    <p className="text-[8px] font-bold text-black uppercase">{item.smtext}</p>
  </CardHeader>

          {/* Body section with Big Image */}
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Project Image"
                            className="w-full object-cover h-[240px]"
                            radius="lg"
                            width="100%"
              src={item.Imagee}
            />
          </CardBody>

          {/* Footer section with small icon/text */}
         <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{item.downtext}</p>
            <small className="text-default-500">{item.country}</small>
            <h4 className="font-bold text-tiny">{item.prize}</h4>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCards;