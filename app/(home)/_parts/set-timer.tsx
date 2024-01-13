"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";

const SetTimer = () => {
  const router = useRouter();

  // const [year, setYear] = useState<number>(0);
  // const [month, setMonth] = useState<number>(0);
  // const [day, setDay] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);

  // const [openYear, setOpenYear] = useState(false);
  // const [openMonth, setOpenMonth] = useState(false);
  // const [openDay, setOpenDay] = useState(false);
  const [openHour, setOpenHour] = useState(false);
  const [openMintue, setOpenMintue] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  const hr = Array.from({ length: 24 }, (_, index) => index);
  const minAndSec = Array.from({ length: 60 }, (_, index) => index);

  const handleStart = () => {
    // 2025-02-02T00:00:00

    const time = `${hour}-${minute}-${second}`;
    router.replace(`/timer/${time}`);
  };

  return (
    <section className="flex gap-10 flex-col items-center">
      <section className="flex flex-col md:flex-row gap-10">
        <section className="space-y-3">
          <p>Hour: {hour.toString().padStart(2, "0")}</p>

          <Popover open={openHour} onOpenChange={setOpenHour}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openHour}
                className="w-40 justify-between"
              >
                {hour.toString().padStart(2, "0")} hour(s)
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-40 p-0">
              <Command>
                <CommandInput placeholder="Enter hour" className="h-9" />

                <CommandEmpty>Type number.</CommandEmpty>

                <ScrollArea className="h-72">
                  <CommandGroup>
                    {hr.map((e) => (
                      <CommandItem
                        key={e}
                        value={e + ""}
                        onSelect={(currentValue) => {
                          setHour(Number(currentValue));
                          setOpenHour(false);
                        }}
                      >
                        {e.toString().padStart(2, "0")}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            hour === e ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </ScrollArea>
              </Command>
            </PopoverContent>
          </Popover>
        </section>
        <section className="space-y-3">
          <p>Minute: {minute.toString().padStart(2, "0")}</p>

          <Popover open={openMintue} onOpenChange={setOpenMintue}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openMintue}
                className="w-40 justify-between"
              >
                {minute.toString().padStart(2, "0")} mintue(s)
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-40 p-0">
              <Command>
                <CommandInput placeholder="Enter minute" className="h-9" />

                <CommandEmpty>Type number.</CommandEmpty>

                <ScrollArea className="h-72">
                  <CommandGroup>
                    {minAndSec.map((e) => (
                      <CommandItem
                        key={e}
                        value={e + ""}
                        onSelect={(currentValue) => {
                          setMinute(Number(currentValue));
                          setOpenMintue(false);
                        }}
                      >
                        {e.toString().padStart(2, "0")}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            minute === e ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </ScrollArea>
              </Command>
            </PopoverContent>
          </Popover>
        </section>
        <section className="space-y-3">
          <p>Second: {second.toString().padStart(2, "0")}</p>

          <Popover open={openSecond} onOpenChange={setOpenSecond}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openSecond}
                className="w-40 justify-between"
              >
                {second.toString().padStart(2, "0")} second(s)
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-40 p-0">
              <Command>
                <CommandInput placeholder="Enter second" className="h-9" />

                <CommandEmpty>Type number.</CommandEmpty>

                <ScrollArea className="h-72">
                  <CommandGroup>
                    {minAndSec.map((e) => (
                      <CommandItem
                        key={e}
                        value={e + ""}
                        onSelect={(currentValue) => {
                          setSecond(Number(currentValue));
                          setOpenSecond(false);
                        }}
                      >
                        {e.toString().padStart(2, "0")}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            second === e ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </ScrollArea>
              </Command>
            </PopoverContent>
          </Popover>
        </section>
      </section>

      <Button size={"lg"} onClick={handleStart} className="font-semibold">
        START
      </Button>
    </section>
  );
};

export default SetTimer;
