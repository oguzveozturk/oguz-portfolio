import react from "react";
import Image from "next/image";

const HorizontalViewer = ({ folderName, imageCount = 6 }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap h-full">
      <ul className="flex space-x-4">
        {[...Array(imageCount)].map((_, index) => (
          <li
            key={index}
            className="flex-none h-full border border-gray-300 rounded-lg overflow-hidden"
          >
            <div className="relative w-56 h-full bg-gray-200">
              <Image
                src={`/images/${folderName}/thumb-${index + 1}.webp`}
                layout="responsive"
                width={230}
                height={400}
                objectFit="contain"
                alt=""
                placeholder="blur"
                blurDataURL={`/images/${folderName}/thumb-${index + 1}.webp`}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HorizontalViewer;
