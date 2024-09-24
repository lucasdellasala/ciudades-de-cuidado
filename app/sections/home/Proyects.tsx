import Image from "next/image";
import { titleFont } from "@/app/config";

import {
  BigCard,
  SmallCard,
  GradientArrowButton,
  GradientUnderlineButton,
  Template,
} from "../../components";

export function Proyects() {
  const projectsUrls = [
    "https://i.ibb.co/3cc3bDY/Rectangle-1.png",
    "https://i.ibb.co/10tyY1w/Rectangle-1-3.png",
    "https://i.ibb.co/HGby1bH/Rectangle-1-2.png",
    "https://i.ibb.co/tztcNgD/Rectangle-1-1.png",
  ];

  return (
    <Template className="text-left">
      <div className="w-full relative">
        <Image
          src="https://i.ibb.co/8PFqG48/Group-31.png"
          alt="Tree"
          className="absolute right-0 xl:right-20 2xl:right-28 top-60 xl:top-48 2xl:top-16 z-10"
          width={100}
          height={100}
        />
      </div>
      <div className="max-w-6xl container mx-auto px-20 2xl:px-0">
        <h2 className={`text-4xl font-bold mb-4 ${titleFont.className}`}>
          PROYECTOS
        </h2>
        <p className="mb-8 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          ornare aliquet leo, id hendrerit lectus porttitor eget. Duis a elit
          interdum, tempor nisl non, elementum tellus. Cras at nisi rhoncus,
          porta risus eget, scelerisque ex. Integer sit amet facilisis eros.
          Cras volutpat quam vitae nisl scelerisque finibus vitae in ante. Sed
          velit eros, luctus vitae auctor at, volutpat nec sem. Donec sed
          elementum lectus. Nam vitae magna est. Nam viverra tellus eget
          convallis eleifend. Duis diam sapien, pharetra a convallis eget,
          mattis vitae tellus. Vivamus non enim mi. Fusce commodo nunc vel elit
          pulvinar consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Phasellus convallis dictum sapien, eget convallis tortor
          vestibulum eros.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <BigCard
            imageSrc="https://i.ibb.co/V3wzgW7/bigcardimage.png"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            alt="Proyecto principal"
            className="col-span-5"
          />
          <div className="col-span-7 grid grid-cols-2 gap-x-16 gap-y-5 place-items-center">
            {projectsUrls.map((url, index) => (
              <SmallCard
                key={index}
                imageSrc={url}
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                alt={`Proyecto ${index + 2}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <GradientUnderlineButton>
            <GradientArrowButton>LEER MÁS</GradientArrowButton>
          </GradientUnderlineButton>
        </div>
      </div>
    </Template>
  );
}
