import Image from "next/image";
import { Template } from "../../components";

export function Concept() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.ibb.co/nLdH4Mh/background02.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <Template>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <h2 className="text-5xl font-bold mb-6 md:mb-0 md:w-1/3">
              CONCEPTO
            </h2>
            <div className="md:w-2/3 p-6 rounded-lg">
              <p className="text-lg mb-6">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.
              </p>
              <a href="#" className="text-sm font-semibold text-black w-full flex justify-end">
                <p> LEER MÁS</p>
                <svg
                  className="ml-2 w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 5L21 12M21 12L14 19M21 12H3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Template>
    </div>
  );
}
