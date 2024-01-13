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

const SetTimer = () => {
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);

  const [openHour, setOpenHour] = useState(false);
  const [openMin, setOpenMin] = useState(false);
  const [openSec, setOpenSec] = useState(false);

  const minAndSec = Array.from({ length: 60 }, (_, index) => index);
  const hr = Array.from({ length: 23 }, (_, index) => index);

  return (
    <section className="flex gap-10">
      <section className="space-y-3">
        <p>Hour: {hour}</p>

        <Popover open={openHour} onOpenChange={setOpenHour}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openHour}
              className="w-[200px] justify-between"
            >
              {hour} hour(s)
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Enter hour" className="h-9" />

              <CommandEmpty>Type number.</CommandEmpty>

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
                    {e}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        hour === e ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </section>

      <section className="space-y-3">
        <p>Minute: {minute}</p>

        <Popover open={openMin} onOpenChange={setOpenMin}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openMin}
              className="w-[200px] justify-between"
            >
              {minute} mintue(s)
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Enter minute" className="h-9" />

              <CommandEmpty>Type number.</CommandEmpty>

              <CommandGroup>
                {minAndSec.map((e) => (
                  <CommandItem
                    key={e}
                    value={e + ""}
                    onSelect={(currentValue) => {
                      setMinute(Number(currentValue));
                      setOpenMin(false);
                    }}
                  >
                    {e}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        minute === e ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </section>

      <section className="space-y-3">
        <p>Second: {second}</p>

        <Popover open={openSec} onOpenChange={setOpenSec}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openSec}
              className="w-[200px] justify-between"
            >
              {second} second(s)
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Enter second" className="h-9" />

              <CommandEmpty>Type number.</CommandEmpty>

              <CommandGroup>
                {minAndSec.map((e) => (
                  <CommandItem
                    key={e}
                    value={e + ""}
                    onSelect={(currentValue) => {
                      setSecond(Number(currentValue));
                      setOpenSec(false);
                    }}
                  >
                    {e}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        second === e ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </section>
    </section>
  );
};

export default SetTimer;
