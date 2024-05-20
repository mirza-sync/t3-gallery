import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = 'force-dynamic'

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  })
  console.log(images)
  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((image, index) => (
        <div key={image.id + '-' + index} className="w-48 flex flex-col">
          <img src={image.url} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {


  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">
          Sign in to view images
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
