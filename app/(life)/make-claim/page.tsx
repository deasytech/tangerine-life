import GoBackButton from "@/components/GoBackButton";
import ClaimFormContainer from '@/components/life/ClaimFormContainer';

const Page = () => {
  return (
    <section className='relative max-container padding-container mt-20'>
      <div className="flex gap-4 items-center pb-6">
        <GoBackButton />
      </div>
      <h1 className="bold-48 text-green-base pt-12 text-center">Make a Claim</h1>
      <p className="text-center text-lg text-generic-500 mx-auto max-w-lg">There are some information we need to get started, please make sure you provide the right details.</p>
      <ClaimFormContainer />
    </section>
  );
};

export default Page;
