import { Card, CardHeader, Image } from "@heroui/react";
import {Button} from "@heroui/react";

function Vajalpage() {
  const Pagenext1 = [
    {
      NX: "./Memory.png",
      pa: "What type of incident?",
      Nxpa: "Choose the category that best describes the incident.",
    },
    {
      NX: "./location.png",
      pa: "Tell us about the incident?",
      Nxpa: "Choose the category that best describes the incident.",
    },
    {
      NX: "./danger.png",
      pa: "Where did the incident occur?",
      Nxpa: "Choose the category that best describes the incident.",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen py-10 ">
      {/* Header Section */}
      <div className="space-y-3 mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">Let’s get started</h1>
        <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
          Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general
          sac mascho werhoLorem ipsum dolar sit gene
        </p>
      </div>



<div className="relative flex items-center justify-between w-full max-w-2xl mx-auto my-12 px-2">
  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-400 -translate-y-1/2 z-0"></div>
  <div className="relative z-10 w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
  </div>
  <div className="relative z-10 w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center shadow-sm">
  </div>
  <div className="relative z-10 w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
  </div>
</div>

      <div className="flex flex-wrap justify-center items-center gap-8 px-4">
        {Pagenext1.map((Rayhan, a) => (
          <Card 
            key={a} 
            isPressable 
            className="border-none shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-gray-200"
          >
            <CardHeader 
              className="flex flex-col items-start justify-start w-[250px] h-[280px] p-6 gap-4"
            >
           
              <div className="mb-2">
                <Image
                  alt="Icon"
                  src={Rayhan.NX}
                  width={50}
                  height={50}
                  className="rounded-none object-contain"
                />
              </div>

              <div className="space-y-2 md:mt-10 mt-5 items-start">
                <h2 className="text-[22px] font-bold text-black ">
                  {Rayhan.pa}
                </h2>
                <p className="text-sm text-gray-600">
                  {Rayhan.Nxpa}
                </p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="text-center items-center justify-center mx-auto md:mt-20 mt-10 ">
       <Button className="bg-[#F26922] text-white rounded-sm w-[139px] h-[42px]">Get started</Button>
      </div>
    </section>
  );
}

export default Vajalpage;