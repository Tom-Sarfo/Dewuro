import { useNavigate } from "react-router";

type StepRoutes = Record<number, string>;

interface UseStepNavigationProps {
  currentStep: number;
  setStep: (step: number) => void;
  totalSteps: number;
  stepRoutes: StepRoutes;
}

export const useStepNavigation = ({
  currentStep,
  setStep,
  totalSteps,
  stepRoutes,
}: UseStepNavigationProps) => {
  const navigate = useNavigate();

  const handleStepChange = (direction: "next" | "back") => {
    let newStep = currentStep;

    if (direction === "next") {
      newStep = Math.min(currentStep + 1, totalSteps);
    } else if (direction === "back") {
      newStep = Math.max(currentStep - 1, 1);
    }

    setStep(newStep);

    const route = stepRoutes[newStep];
    if (route) {
      navigate(route);
    }
  };

  return { handleStepChange };
};
