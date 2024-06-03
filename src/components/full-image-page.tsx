import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
    const image = await getImage(props.id)

    return (
        <div className="flex w-full h-full">
            <div className="flex-shrink my-auto">
                <img src={image.url} className="object-contain" />
            </div>
            <div className="w-48 flex flex-col flex-shrink-0 border-l">
                <div className="text-xl font-semibold">{image.name}</div>
            </div>
        </div>
    );
}