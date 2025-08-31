"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/khalam-ui/card";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface LoaderProps {
  className?: string;
}

const lines = [
  {
    title: "SCEPTeR6",
    description: `-- -.-- / -.. .- -.. / .- .-.. .-- .- -.-- ... / - --- .-.. -.. / -- . --..-- / 
-. . ...- . .-. / .-.. . - / -.-- --- ..- .-. / .--. .-. .. -.. . / -.-. --- -- 
. / --- ..- - .-.-.- .. / .-- .- ... -. .----. - / . .- ... -.-- / .- - / ..-.  
.. .-. ... - --..-- / -... ..- - / .. / --. .-. . .-- / .. -. - --- / .. -      
.-.-.- / .. / -. . ...- . .-. / .-.. . - / -- -.-- ... . .-.. ..-. / ..-. .-.. .
-..- / .-- .... .- - / .. / -.. .. -.. .-.-.- / - .... . -. / --- -. . / -.. .- 
-.-- --..-- / .. / .-. . .- .-.. .. --.. . -.. / .. - / .-- .- ... -. .----. - /
-... . -.-. .- ..- ... . / .. / .-.. .- -.-. -.- . -.. / .--. .-. .. -.. .      
.-.-.- / .. - / .-- .- ... / -... . -.-. .- ..- ... . / . ...- . .-. -.-- - ....
.. -. --. / .. / -.. .. -.. / .-- .- ... / -. --- - .... .. -. --. / .. / .-- . 
-. - / --- ..- - / --- ..-. / -- -.-- / .-- .- -.-- / - --- / -.. --- .-.-.- /  
.-.. .. ..-. . / ..-. . .-.. - / ... -.-. .-. .. .--. - . -.. --..-- / .-.. ..  
-.- . / .- / ... . - ..- .--. .-.-.- --- -. . / -.. .- -.-- --..-- / .. / .-- . 
-. - / --- ..- - / --- ..-. / -- -.-- / .-- .- -.-- / - --- / --. . - / .... .  
.-. / ..-. .-.. --- .-- . .-. ... --..-- / -... . -.-. .- ..- ... . / ... .... .
/ - --- .-.. -.. / -- . / -. --- / --- -. . / .... .- -.. / . ...- . .-. / --.  
--- - / .... . .-. / ..-. .-.. --- .-- . .-. ... / -... . ..-. --- .-. . .-.-.- 
/ - .... .- - / .-.. . ..-. - / -- . / .. -. / ... .... --- -.-. -.- / -....- / 
..-. --- .-. / ... --- -- . --- -. . / ... --- / .- -- .- --.. .. -. --. --..-- 
/ ... .... . / -.. . ... . .-. ...- . -.. / . ...- . .-. -.-- / ... --.- ..- .- 
.-. . / .. -. -.-. .... / --- -. / . .- .-. - .... / ..-. ..- .-.. .-.. / ---   
..-. / ..-. .-.. --- .-- . .-. ... .-.-.- .- / -.. .- -.-- / .-.. .- - . .-.    
--..-- / ... .... . / - --- .-.. -.. / -- . / ... .... . / .... .- -.. / ...    
.-.. . . .--. - / .-- .. - .... / - .... . -- / -... . ... .. -.. . / .... .    
.-.-.- / ... .... . / .... .- -.. / - . .- / .-- .. - .... / -- -.-- / ..-. .-. 
--- .-- . .-. ... .-.-.- / .- -. -.. / .. - / -... . -.-. .- -- . / - .... . /  
--- -. .-.. -.-- / - .... .. -. --. / .. / .-- .. .-.. .-.. / ..-. --- .-. .    
...- . .-. / -... . / .--. .-. --- ..- -.. / --- ..-. / -- -.-- ... . .-.. ..-. 
/ ..-. --- .-.-.-`,
  },
];

export function Loader({ className }: LoaderProps) {
  const [line, setLine] = useState(
    lines[Math.floor(Math.random() * lines.length)]
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setLine(lines[Math.floor(Math.random() * lines.length)]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn("flex items-center justify-center min-h-screen", className)}
    >
      <Card className="w-max max-w-4xl">
        <CardHeader className="w-max text-center">
          <CardTitle className="w-max text-center">{line.title}</CardTitle>
        </CardHeader>
        <CardContent className="w-max text-justify text-sm whitespace-pre-wrap text-card-foreground/80">
          {(() => {
            const chars = Array.from(line.description);
            const result = [];
            let currentChar = "";
            let count = 0;

            for (let i = 0; i < chars.length; i++) {
              const char = chars[i];
              let mappedChar = char;

              switch (char) {
                case "-":
                  mappedChar = "m";
                  break;
                case ".":
                  mappedChar = "h";
                  break;
                case "/":
                  mappedChar = "m";
                  break;
                default:
                  mappedChar = char;
              }

              if (mappedChar === currentChar) {
                count++;
              } else {
                if (count > 0) {
                  if (count === 1) {
                    result.push(currentChar);
                  } else {
                    result.push(`${count}${currentChar}`);
                  }
                }
                currentChar = mappedChar;
                count = 1;
              }
            }

            // Handle the last group
            if (count > 0) {
              if (count === 1) {
                result.push(currentChar);
              } else {
                result.push(`${count}${currentChar}`);
              }
            }

            return result;
          })()}
        </CardContent>
      </Card>
    </div>
  );
}
