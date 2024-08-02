import GoBackButton from "@/components/GoBackButton";
import { ProgressBar } from "@/components/ProgressBar";
import RenewPolicyForm from "@/components/life/forms/renew-policy-form";

const Page = () => {
  return (
    <section className='relative max-container padding-container mt-20'>
      <div className="flex gap-4 items-center pb-6">
        <GoBackButton />
      </div>
      <h1 className="bold-32 md:bold-48 text-green-base pt-12 text-center">Renew Motor Policy</h1>
      <p className="text-center text-lg text-generic-500 mx-auto max-w-lg">There are some information we need to get started, please make sure you provide the right details.</p>
      <div className="text-center mb-12 mt-6">
        <p className="text-base font-gilroy-semibold text-green-base">Policy Information</p>
        <div className="max-w-sm mx-auto mt-2 mb-10">
          <ProgressBar step={1} totalSteps={1} />
        </div>
        <RenewPolicyForm />
      </div>
    </section>
  );
};

export default Page;
