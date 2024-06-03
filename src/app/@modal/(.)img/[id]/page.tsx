import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(id)
  if (isNaN(idAsNumber)) throw new Error("Invalid image id")

  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}