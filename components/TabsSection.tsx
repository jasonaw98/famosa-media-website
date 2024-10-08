import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "./ui/moving-border";

const TabsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full pb-12 mt-8 px-24" id="services">
      <h1 className=" text-xl md:text-5xl font-bold pb-16">Our Services</h1>
      <Tabs
        defaultValue="strategic"
        className="w-full flex justify-center items-center gap-12 pb-8 h-full"
      >
        <div>
          <TabsContent value="strategic">
            <Image
              src="https://images.unsplash.com/1/bag-and-hands.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODM3ODcxMXw&ixlib=rb-4.0.3&q=80&w=1080"
              alt="logo"
              width={550}
              height={400}
              className="rounded-xl"
            />
          </TabsContent>
          <TabsContent value="creative">
            <Image
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODM3ODcxMnw&ixlib=rb-4.0.3&q=80&w=1080"
              alt="logo"
              width={550}
              height={400}
              className="rounded-xl"
            />
          </TabsContent>
          <TabsContent value="audience">
            <Image
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODM3ODcxMnw&ixlib=rb-4.0.3&q=80&w=1080"
              alt="logo"
              width={550}
              height={300}
              className="rounded-xl"
            />
          </TabsContent>
        </div>

        <TabsList className="flex flex-col gap-1 sm:gap-8 items-start">
          <TabsTrigger value="strategic">
            <div className="flex flex-col text-start py-2 gap-2">
              <h1 className="text-2xl font-semibold">Strategic Ad Placement</h1>
              <p className="max-w-[500px] text-wrap">
                We strategically place your ads in high-traffic outdoor
                locations to maximize visibility and reach.
              </p>
            </div>
          </TabsTrigger>
          <TabsTrigger value="creative">
            <div className="flex flex-col text-start py-2 gap-2">
              <h1 className="text-2xl font-semibold">
                Creative Design Services
              </h1>
              <p className="max-w-[500px] text-wrap">
                Our team of talented designers creates eye-catching and engaging
                ad designs that captivate your target audience.
              </p>
            </div>
          </TabsTrigger>
          <TabsTrigger value="audience">
            <div className="flex flex-col text-start py-2 gap-2">
              <h1 className="text-2xl font-semibold">Audience Targeting</h1>
              <p className="max-w-[500px] text-wrap">
                We tailor advertising campaigns to specific demographics and
                locations to ensure your message reaches the right audience.
              </p>
            </div>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Button
            borderRadius="1.75rem"
            duration={4000}
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-8 bg-opacity-10 hover:-rotate-1 ease-in-out duration-300"
          >
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">Initial Consultation</h1>
              <p>
                We begin by understanding your advertising needs and goals to
                create a customized outdoor advertising strategy.
              </p>
            </div>
          </Button>
          <Button
            borderRadius="1.75rem"
            duration={5000}
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-8 bg-opacity-10 hover:rotate-1 ease-in-out duration-300"
          >
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">Design & Planning</h1>
              <p>
                Our team of experts will design eye-catching outdoor
                advertisements and plan the placement for maximum visibility.
              </p>
            </div>
          </Button>
          <Button
            borderRadius="1.75rem"
            duration={6000}
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-8 bg-opacity-10 hover:-rotate-1 ease-in-out duration-300"
          >
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">Implementation</h1>
              <p>
                We execute the outdoor advertising campaign meticulously,
                ensuring that every detail is taken care of to reach your target
                audience effectively.
              </p>
            </div>
          </Button>
          <Button
            borderRadius="1.75rem"
            duration={3500}
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-8 bg-opacity-10 hover:rotate-1 ease-in-out duration-300"
          >
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">
                Monitoring & Optimization
              </h1>
              <p>
                We continuously monitor the performance of your outdoor ads and
                optimize them to ensure the best results for your business.
              </p>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
