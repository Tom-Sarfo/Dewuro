interface Step {
  role: string;
  period: string;
  duration: string;
  description?: string;
  impact?: string;
}

interface CollaborationStepperProps {
  brand: string;
  logo: string;
  impressedText: string;
  duration: string;
  steps: Step[];
}

const CollaborationStepper = ({
  brand,
  logo,
  impressedText,
  duration,
  steps,
}: CollaborationStepperProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <img src={logo} alt={brand} className="w-8 h-8 rounded-full" />
        <div>
          <h3 className="font-semibold">{brand}</h3>
          <p className="text-sm text-gray-500">
            {impressedText} • {duration}
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#D9D9D9]" />
              {index < steps.length - 1 && (
                <div className="w-0.5 h-full bg-gray-200" />
              )}
            </div>
            <div>
              <p className="font-medium">{step.role}</p>
              <p className="text-sm text-gray-500">
                {step.period} • {step.duration}
              </p>
              {step.description && (
                <p className="text-sm mt-1">{step.description}</p>
              )}
              {step.impact && (
                <p className="text-sm mt-1 text-[#7B61FF]">{step.impact}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationStepper;
