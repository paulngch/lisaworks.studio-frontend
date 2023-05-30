import { useState, useEffect } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { RadioGroup } from "@headlessui/react";

import CombinedParacordBraid from "../components/configurator/CombinedParacordBraid.tsx";

const braid = {
  combination: [
    //1111
    { name: "1-1", sequence: 1111 },
    //
    { name: "2-1", sequence: 1112 },
    { name: "2-2", sequence: 2221 },
    { name: "2-3", sequence: 1122 },
    { name: "2-4", sequence: 1212 },
    { name: "2-5", sequence: 1221 },
    //
    { name: "3-1", sequence: 2113 },
    { name: "3-2", sequence: 1123 },
    { name: "3-3", sequence: 1132 },
    { name: "3-4", sequence: 1213 },
    { name: "3-5", sequence: 1312 },
    //
    { name: "3-6", sequence: 1223 },
    { name: "3-7", sequence: 2213 },
    { name: "3-8", sequence: 2231 },
    { name: "3-9", sequence: 2123 },
    { name: "3-10", sequence: 2321 },
    //
    { name: "3-11", sequence: 1332 },
    { name: "3-12", sequence: 3312 },
    { name: "3-13", sequence: 3321 },
    { name: "3-14", sequence: 3132 },
    { name: "3-15", sequence: 3231 },
    //
    { name: "4-1", sequence: 1234 },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Configurator = () => {
  const [selectedCombination, setSelectedCombination] = useState("");

  const [braidOneColor, setBraidOneColor] = useState("#15803D");
  const [braidTwoColor, setBraidTwoColor] = useState("#100000");
  const [braidThreeColor, setBraidThreeColor] = useState("#100000");
  const [braidFourColor, setBraidFourColor] = useState("#38BDF8");

  const [tempColorOne, setTempColorOne] = useState("#FDE68A");
  const [tempColorTwo, setTempColorTwo] = useState("#15803D");
  const [tempColorThree, setTempColorThree] = useState("#38BDF8");
  const [tempColorFour, setTempColorFour] = useState("#DB2777");

  useEffect(() => {
    let hexArray: string[] = [];

    const braidSequenceInHex = () => {
      let combinationInStr = selectedCombination.toString();
      for (let i = 0; i < combinationInStr.length; i++) {
        switch (combinationInStr[i]) {
          case "1":
            hexArray.push(tempColorOne);
            break;
          case "2":
            hexArray.push(tempColorTwo);
            break;
          case "3":
            hexArray.push(tempColorThree);
            break;
          case "4":
            hexArray.push(tempColorFour);
            break;
          default:
            console.log("ERROR in selectedCombination");
        }
      }
      return hexArray;
    };
    braidSequenceInHex();
    setBraidOneColor(hexArray[0]);
    setBraidTwoColor(hexArray[1]);
    setBraidThreeColor(hexArray[2]);
    setBraidFourColor(hexArray[3]);
  }, [selectedCombination]);

  return (
    <>
      <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium text-gray-900">
                Braid Configurator
              </h1>
            </div>
          </div>

          {/* Braid Image */}
          <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
            <h2 className="sr-only">Paracord</h2>
            <div className="">
              <CombinedParacordBraid
                fillOne={braidOneColor}
                fillTwo={braidTwoColor}
                fillThree={braidThreeColor}
                fillFour={braidFourColor}
              />
            </div>
          </div>

          <div className="mt-8 lg:col-span-5">
            {/* Direction details */}
            <div className="">
              <h2 className="text-sm font-medium text-gray-900">Directions</h2>

              <div className="prose prose-sm mt-0 text-gray-500">
                Select up to 4 colors or key in the HEX codes into the input
                fields.
                <br />
                Check out the combinations for different patterns!
                <br />
                <br />
                Combinations are in the format of X-Y.
                <br />
                X: Number of colors used, starting from Color 1 to Color 4
                <br />
                Y: The pattern variation, starting from 1
              </div>
            </div>
            <form>
              {/* Color picker */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  HEX Color Picker
                </h2>
                <div className="flex flex-wrap ">
                  <div className="w-1/2 py-2">
                    Color 1
                    <HexColorPicker
                      color={tempColorOne}
                      onChange={setTempColorOne}
                    />
                    <HexColorInput
                      className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      color={tempColorOne}
                      onChange={setTempColorOne}
                      placeholder="Choose a color"
                      prefixed
                      alpha
                    />
                  </div>
                  <div className="w-1/2 py-2">
                    Color 2
                    <HexColorPicker
                      color={tempColorTwo}
                      onChange={setTempColorTwo}
                    />
                    <HexColorInput
                      className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      color={tempColorTwo}
                      onChange={setTempColorTwo}
                      placeholder="Choose a color"
                      prefixed
                      alpha
                    />
                  </div>
                  <div className="w-1/2 py-2">
                    Color 3
                    <HexColorPicker
                      color={tempColorThree}
                      onChange={setTempColorThree}
                    />
                    <HexColorInput
                      className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      color={tempColorThree}
                      onChange={setTempColorThree}
                      placeholder="Choose a color"
                      prefixed
                      alpha
                    />
                  </div>
                  <div className="w-1/2 py-2">
                    Color 4
                    <HexColorPicker
                      color={tempColorFour}
                      onChange={setTempColorFour}
                    />
                    <HexColorInput
                      className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      color={tempColorFour}
                      onChange={setTempColorFour}
                      placeholder="Choose a color"
                      prefixed
                      alpha
                    />
                  </div>
                </div>
              </div>

              {/* Pattern/Combination picker */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900">
                    Combination
                  </h2>
                </div>

                <RadioGroup
                  value={selectedCombination}
                  onChange={setSelectedCombination}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a combibnation
                  </RadioGroup.Label>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {braid.combination.map((combination) => (
                      <RadioGroup.Option
                        key={combination.name}
                        value={combination.sequence}
                        className={({ active, checked }) =>
                          classNames(
                            active
                              ? "ring-2 ring-indigo-500 ring-offset-2"
                              : "",
                            checked
                              ? "border-transparent bg-indigo-600 text-white hover:bg-indigo-700"
                              : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                            "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                          )
                        }
                      >
                        <RadioGroup.Label as="span">
                          {combination.name}
                        </RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Configurator;
