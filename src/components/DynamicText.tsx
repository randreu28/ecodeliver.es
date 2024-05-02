import { useScramble } from "use-scramble";
import type { UseScrambleProps } from "use-scramble";
import { useEffect, useState } from "react";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  texts: string[];
  frequency: number;
  scrambleProps?: UseScrambleProps;
}

export default function DynamicText({
  texts,
  frequency,
  scrambleProps,
  ...props
}: Props) {
  const [index, setIndex] = useState<number>(0);
  const { ref } = useScramble({
    text: texts[index],
    speed: 0.5,
    ...scrambleProps,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => {
        if (index >= texts.length - 1) {
          return 0;
        }

        return index + 1;
      });
    }, frequency);
    return () => clearTimeout(intervalId);
  }, []);

  return <span ref={ref} {...props} />;
}
