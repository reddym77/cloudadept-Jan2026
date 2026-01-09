import React from "react";
import logoSrc from "@/image/C&A-17.png";

interface LogoProps {
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ className = "" }) => (
  <img
    src={logoSrc}
    alt="CloudAdept Systems Logo"
    className={`h-12 w-auto ${className}`}
  />
);

export default Logo;
