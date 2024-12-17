import Link from "next/link";
import Image from "next/image";

const AppStoreDownload = ({ href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transform transition-transform hover:scale-105"
    >
      <Image
        src="/images/appstore.webp"
        alt="Download on the App Store"
        width={160}
        height={48}
        className="rounded-lg shadow-md"
      />
    </Link>
  );
};

export default AppStoreDownload;
