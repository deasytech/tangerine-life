import { FC } from "react";

interface ProgressProps {
  step: number;
  totalSteps: number;
}

export const ProgressBar: FC<ProgressProps> = ({ step, totalSteps }) => {
  const progressWidth = (step / totalSteps) * 100;

  return (
    <div className="relative w-full h-2">
      <div
        className="absolute top-0 left-0 h-full bg-green-base"
        style={{ width: `${progressWidth}%` }}
      />
      <div className="flex items-center justify-between h-full text-xs text-white">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${step > index ? "bg-green-base" : "bg-slate-200"
              }`}
          />
        ))}
      </div>
    </div>
  );
};