"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://scontent.fkul18-2.fna.fbcdn.net/v/t39.30808-6/346847481_1675096352954298_8177267386988884083_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6wdAw7hSZpkQ7kNvgHlp1fy&_nc_ht=scontent.fkul18-2.fna&_nc_gid=ADJ_ji5HW0GE6TYMSjlnLtY&oh=00_AYBFcRCMm2UN3Lxr4EF2NkJj2VYqlu023qwQZqbk4FZwQg&oe=670ABA5C",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://scontent.fkul18-2.fna.fbcdn.net/v/t39.30808-6/345455139_995779761798935_1862873487292372266_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8OIPFcniwMEQ7kNvgElCU7a&_nc_ht=scontent.fkul18-2.fna&_nc_gid=ANX4d1PYJnn20BF9NS1L05y&oh=00_AYBPijmIn2B6H7jrEo195TYNL0EjPEje2YWtMUE9f6QR4g&oe=670AC833",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://scontent.fkul18-1.fna.fbcdn.net/v/t39.30808-6/289186979_115422017871054_5777426987600317127_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=17kJlmoozb0Q7kNvgFRih3k&_nc_ht=scontent.fkul18-1.fna&_nc_gid=AkZPFmp8i71NYH6YQ9hMx4I&oh=00_AYBKH5j8C0BwLAbw-PSn5Nc1uZ-7jJhswnJET_Didnw0fg&oe=670ADB4D",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://scontent.fkul18-1.fna.fbcdn.net/v/t39.30808-6/284949669_105608992185690_6756093562637842987_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KPvvUhnltaAQ7kNvgGiRdSZ&_nc_ht=scontent.fkul18-1.fna&_nc_gid=AwhRgaa5E12HazJMyrDxaJN&oh=00_AYDSuDy-fY5nuymajiQCPrRTWwGzswRps7jn4nYaNmUGxA&oe=670AC55A",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://scontent.fkul18-2.fna.fbcdn.net/v/t39.30808-6/301678279_128024666656755_7806843806445659383_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ynMpUUrdst8Q7kNvgEln-bP&_nc_ht=scontent.fkul18-2.fna&_nc_gid=Avkz-7o0RmynvU1Ph0ZcfaS&oh=00_AYC4XKvDqzTJPV7fUOYJ9p-1eoGyvFoZlATTiusGf3dxaA&oe=670ABAED",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://scontent.fkul18-2.fna.fbcdn.net/v/t39.30808-6/305846941_128025816656640_7126950350574824570_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wsoanJq_WxAQ7kNvgFYX1q0&_nc_ht=scontent.fkul18-2.fna&_nc_gid=Avkz-7o0RmynvU1Ph0ZcfaS&oh=00_AYChLv6ukaDa6dDvqZHHo0HnRFqnxpErzIsJYexJelU16g&oe=670ADF21",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://scontent.fkul18-2.fna.fbcdn.net/v/t39.30808-6/305960353_128025909989964_7212830055737907175_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5R8vj4kUqmYQ7kNvgFucykm&_nc_ht=scontent.fkul18-2.fna&_nc_gid=Avkz-7o0RmynvU1Ph0ZcfaS&oh=00_AYCe8hKy8NvVsYxA5Ps_r8STvb-iEhA1o9ovIL4Wx5jWzA&oe=670AC165",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://scontent.fkul18-2.fna.fbcdn.net/v/t39.30808-6/305889014_128025849989970_8386543451543123374_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=I0YtvXrE03IQ7kNvgHjm-hH&_nc_ht=scontent.fkul18-2.fna&_nc_gid=Avkz-7o0RmynvU1Ph0ZcfaS&oh=00_AYCOl1BN7oZr8Te33v0L77os9ZAC-QFRIyMnRz5kKYV6Fw&oe=670AE8A4",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://scontent.fkul18-2.fna.fbcdn.net/v/t39.30808-6/336651649_556105396511948_709282983585927486_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tEo3w_a0dBcQ7kNvgHpOz0n&_nc_ht=scontent.fkul18-2.fna&_nc_gid=AvjJrSq3hUAv3gQnIKFAmMs&oh=00_AYD-0EpwOKfsSbYqmwXbp9JYOjxqMaWzttZzqW-SMHJMJA&oe=670ADB2F",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://scontent.fkul18-3.fna.fbcdn.net/v/t39.30808-6/405236789_324567460335807_6583509896846212669_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=S9Lxkm0JGKEQ7kNvgELgXVt&_nc_ht=scontent.fkul18-3.fna&_nc_gid=AHRP0JOkz7wenR27tGciwcO&oh=00_AYBPJcjsTUu2_FR92ACNMCB_rExfNF0lPvaqoS-nqpiQJA&oe=670AE1E8",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://scontent.fkul18-3.fna.fbcdn.net/v/t39.30808-6/291259526_117915700955019_8387793644580194257_n.jpg?stp=c177.0.726.726a_dst-jpg_s552x414&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_ohc=PfHXrVc23XwQ7kNvgHMdgWk&_nc_ht=scontent.fkul18-3.fna&_nc_gid=AqIRrDYXvODUFSy07_zjSzv&oh=00_AYC9lmfAeVgzMikELNETXhb59W1M0tAD3JpRNJ_M2leTrA&oe=670B042E",
  },

];
