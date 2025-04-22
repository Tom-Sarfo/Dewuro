import React from "react"

interface StepItem {
  role: string
  period: string
  duration: string
  description?: string
  impact?: string
}

interface BrandHistoryProps {
  brand: string
  logo: string
  impressedText?: string
  duration: string
  steps: StepItem[]
}

const CollaborationStepper: React.FC<BrandHistoryProps> = ({
  brand,
  logo,
  impressedText,
  duration,
  steps,
}) => {
  return (
    <div className="flex flex-col space-y-4 border-b border-gray-200 pb-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <img src={logo} alt={brand} className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="font-bold text-[18px]">{brand}</h3>
          <p className="text-sm text-gray-500">{duration}</p>
          {impressedText && (
            <p className="text-sm text-teal-600">{impressedText}</p>
          )}
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="ml-5 relative border-l-2 border-gray-200 space-y-6">
        {steps.map((step, idx) => (
          <div key={idx} className="relative pl-4">
            {/* Dot */}
            <div className="absolute -left-2 top-1 w-3 h-3 bg-gray-300 rounded-full" />

            {/* Step Content */}
            <div className="space-y-1">
              <p className="font-semibold text-sm">{step.role}</p>
              <p className="text-xs text-gray-500">
                {step.period} • {step.duration}
              </p>
              {step.description && (
                <p className="text-sm text-gray-600">{step.description}</p>
              )}
              {step.impact && (
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-purple-600 text-lg">🌀</span>
                  <p>{step.impact}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CollaborationStepper
