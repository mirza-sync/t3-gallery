import FullPageImageView from "~/components/full-image-page";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(id)
  if (isNaN(idAsNumber)) throw new Error("Invalid image id")

  return (
    <FullPageImageView id={idAsNumber} />
  );
}