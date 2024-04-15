"use client";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import SpotlightButton, { ButtonProps } from "./spotlight";

const SubmitButton = (props: ButtonProps) => {
  const { pending } = useFormStatus();
  console.log(pending);

  return <SpotlightButton {...props} pending={pending} />;
};

export default SubmitButton;
