import Link from "next/link";
function CustomLink({ title, link, icon, important, big, newTab }) {
  return (
<Link
  href={link}
  title={title}
  target={newTab ? "_blank" : "_self"}
  className={
    important
      ? "text-sm custom-link"
      : big
      ? "text-4xl custom-link"
      : "text-xs custom-link"
  }
>
  {title ? title : icon}
</Link>

  );
}

export default CustomLink;
