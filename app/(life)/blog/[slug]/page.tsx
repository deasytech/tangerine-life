import BlogCard from "@/components/life/cards/BlogCard";
import GoBackButton from "@/components/GoBackButton"
import { Button } from "@/components/ui/button";
import { POSTS } from "@/constants/life";
import { ParamsProps } from "@/types"
import Image from "next/image";

const SlugPage = ({ params }: ParamsProps) => {
  const { slug } = params;
  const post = POSTS.find(post => post.slug === slug);
  const morePosts = POSTS.slice(0, 3);

  return (
    <>
      <section className="relative max-container padding-container mt-44">
        <GoBackButton text="Back to Blog posts" />

        <div className="flex flex-col gap-3 w-full">
          <p className="uppercase text-sm font-semibold text-generic-800 mt-8">{post?.category || "world insurance day"}</p>
          <h1 className="bold-48 text-generic-950 !font-gilroy-medium">{post?.title || "Insurance Made Easy"}</h1>
          <p className="text-base text-generic-800 !font-gilroy-regular">The prevalence of asthma and allergic rhinitis in Nigeria is high with variabilities across regions and age groups. The number of persons with clinical asthma in Nigeria (approximately 13 million) ranks among the highest in Africa.</p>
          <p className="text-base text-generic-800 !font-gilroy-regular">{post?.date || "3rd May 2022, 5 mins"}</p>
        </div>
        <div className="w-full h-[567px] relative my-8">
          <Image
            src="/images/blog/blog_big.png"
            alt={post?.title || "Insurance Made Easy"}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-20">
          <div className="flex-[3]">
            <h3 className="regular-24 text-generic-800">Understanding the Basics</h3>
            <p className="text-base text-generic-800 py-6">What is Insurance?<br />At its core, insurance is a contract between an individual (or entity) and an insurance company. The individual pays a premium in exchange for financial protection against specific risks, such as accidents, illness, property damage, or loss.</p>
            <h3 className="regular-24 text-generic-800">Types of Insurance</h3>
            <ul className="list-disc text-base text-generic-800 py-6 ml-3">
              <li>Life Insurance: Provides a financial safety net for your loved ones in the event of your death.</li>
              <li>Health Insurance: Covers medical expenses, including hospital visits, medications, and preventive care.</li>
              <li>Auto Insurance: Protects against financial losses due to accidents or theft involving your vehicle.</li>
              <li>Homeowner's Insurance: Offers coverage for damage to your home and belongings caused by covered perils like fire, theft, or natural disasters.</li>
              <li>Renter's Insurance: Similar to homeowner's insurance but tailored for renters, providing coverage for personal property and liability.</li>
              <li>Business Insurance: Protects businesses against losses due to events such as property damage, liability claims, or interruption of operations.</li>
            </ul>
            <h3 className="regular-24 text-generic-800">Key Concepts</h3>
            <ul className="list-decimal ml-3 text-base text-generic-800 py-6">
              <li>Premiums: The amount you pay for insurance coverage, typically on a monthly or annual basis.</li>
              <li>Deductibles: The amount you must pay out of pocket before your insurance coverage kicks in.</li>
              <li>Coverage Limits: The maximum amount an insurance policy will pay for a covered claim.</li>
              <li>Claims Process: The procedure for filing and resolving claims with your insurance company in the event of a covered loss.</li>
            </ul>
            <h3 className="regular-24 text-generic-800">Factors Affecting Insurance Costs</h3>
            <ul className="list-decimal ml-3 text-base text-generic-800 py-6">
              <li>Risk Factors: Insurance premiums are based on factors such as age, health status, driving record, location, and coverage history.</li>
              <li>Type and Amount of Coverage: More extensive coverage and lower deductibles generally result in higher premiums.</li>
              <li>Discounts: Many insurance companies offer discounts for factors like bundling policies, maintaining a good driving record, or installing safety features in your home or car.</li>
            </ul>
          </div>
          <div className="flex flex-col flex-1 bg-green-50 p-8 rounded-2xl gap-3 h-fit">
            <p className="regular-24 text-green-950 !font-gilroy-medium">Get email updates</p>
            <p className="text-base text-green-950 font-gilroy-regular">Sign up for newsletter updates on our products and special offers.</p>
            <div className="flex bg-white rounded-full mt-4">
              <input type="email" placeholder="Your email" className="w-full bg-transparent active:ring-0 hover:ring-0 border-0 px-3" />
              <Button variant="darkgreen" className="gap-2 rounded-full">
                Signup
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <h3 className="bold-36 !font-gilroy-light">More Posts</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {morePosts.map((post) =>
            <BlogCard
              key={post.title}
              image={post.image}
              category={post.category}
              title={post.title}
              slug={post.slug}
              date={post.date}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default SlugPage;
