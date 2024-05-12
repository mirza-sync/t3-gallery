const mockUrls = [
  "https://utfs.io/f/77cb95b1-4df7-4a4d-961b-57ea7f94c425-jlo1ca.jpg",
  "https://utfs.io/f/2aadfa93-ad70-46fd-ac66-8c31bee983f8-jlo1c9.jpg",
  "https://utfs.io/f/30ce16cd-92a7-4cb0-9dad-9243a96bb05c-jlo1c8.jpg",
  "https://utfs.io/f/5df334fe-614f-4262-8feb-37430e1ac3ce-jlo1c7.jpg",
  "https://utfs.io/f/d4908f4c-5110-4d2e-8130-4a3f0beffa23-jlo1c6.jpg",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
