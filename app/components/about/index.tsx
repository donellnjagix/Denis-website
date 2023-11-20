"use client";
import Image from "next/image";
import aboutImage from "@/public/images/construction3.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/app/types/types";

type Props = {};

const About = (props: Props) => {
  return (
    <div id="aboutus" className="bg-alice-blue py-8">
      <div className="flex justify-center py-6">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="underline underline-offset-8">
            Get to know about the company
          </p>
        </div>
      </div>
      {/* <!--About us section--> */}

      <section className="md:h-full  py-10 md:pb-0">
        <div className="mx-auto w-5/6 md:h-5/6 md:flex items-center justify-center">
          {/* description */}
          <div className="md:basis-3/5 items-center">
            <p className="text-sm">
              Normanstone trust bank is your one stop shop for all of your banking needs
              <br />
              <br />
              What makes us different from the other banks? The answer is simple. Whether youre a business owner, nonprofit group, government agency, school administrator or personal account holder – you arent just a Banque Du PTG customer; youre our friend and neighbor. By taking the extra time to get to know you, were better able to serve your needs. Those needs and your plans for the future are very important to us. If youre looking for money or a source of business advice and information you can trust, you want a bank whose commitment to you isnt limited by the size of your balance. Banque Du PTG has been that institution to generations of families and businesses across the region for over a century. MORE...
              
            </p>
            <div className="my-8">
              <button className="rounded-md bg-accent-orange py-2 px-10 transition duration-300 hover:bg-orange-400 text-black">
                Learn more
              </button>
            </div>
          </div>
          {/* image */}
          <div className="flex  md:basis-2/5 justify-center md:ml-40 md:-mt-12  md:justify-items-end h-[350px]">
            <Image
              src={aboutImage}
              alt="about-image"
              width={700}
              height={150}
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
