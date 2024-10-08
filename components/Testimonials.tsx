import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "Brand Manager",
    body: "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    name: "Jill",
    username: "Marketing Manager",
    body: "The team at the outdoor advertising agency is top-notch! I highly recommend their services for anyone looking to make a real impact with their advertising efforts.",
  },
  {
    name: "John Smith",
    username: "CEO",
    body: "I was impressed by the professionalism and creativity of the outdoor advertising agency. They delivered exceptional results that exceeded our expectations. Thank you for your outstanding work!",
  },
  {
    name: "Jane",
    username: "Creative Director",
    body: "Collaborating with the outdoor advertising agency was a fantastic experience. Their team's attention to detail and commitment to excellence truly set them apart. I look forward to working with them again in the future.",
  },
  {
    name: "Jenny",
    username: "PR Manager",
    body: "I can't say enough good things about the outdoor advertising agency. Their dedication to our project and ability to think outside the box resulted in a successful campaign that generated significant buzz. Highly recommended!",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img?: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <div className="flex flex-col">
          <figcaption className="text-md font-semibold dark:text-white">
            {name}
          </figcaption>
          <p className="text-md font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background pb-12 px-12" id="testimonials">
        <div className="max-w-3xl space-y-10 p-12">
            <h1 className="text-center text-5xl font-bold">Testimonials</h1>
            <p className="text-center font-semibold">Working with the outdoor advertising agency was a game-changer for our marketing campaigns. Their innovative ideas and strategic placements helped us reach a wider audience and increase brand visibility.</p>
        </div>
        <div className="max-w-7xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    </div>
  );
}
