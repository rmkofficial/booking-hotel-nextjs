"use client";
import React, { useEffect } from "react";
import { useTheme as useNextTheme } from "next-themes";
import Image from "next/image";

interface ImagesVawesProps {
  myClassName?: string;
}

const ImagesVawes = ({ myClassName }: ImagesVawesProps) => {
  const { theme } = useNextTheme();
  const [clientTheme, setClientTheme] = React.useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setClientTheme(true);
    } else {
      setClientTheme(false);
    }
  }, [theme]);

  return (
    <>
      {theme === "light" ? (
        <Image
          src="/white.png"
          alt="waves"
          width={2000}
          height={62}
          className={`w-full lg-block ${myClassName}`}
          priority
        />
      ) : (
        <Image
          src="/dark.png"
          alt="waves"
          width={2000}
          height={62}
          className={`w-full lg-block ${myClassName}`}
          priority
        />
      )}
    </>
  );
};

export default ImagesVawes;
