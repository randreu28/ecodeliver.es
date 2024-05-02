import { useScramble } from "use-scramble";
import { useEffect, useState } from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  texts: string[];
  frequency: number;
}

export default function DynamicText({ texts, frequency, ...props }: Props) {
  const [index, setIndex] = useState<number>(0);
  const { ref } = useScramble({
    text: texts[index],
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

  return <p ref={ref} {...props} />;
}
