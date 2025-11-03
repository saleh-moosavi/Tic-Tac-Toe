export default function BlurBackGround({ src }: { src: string }) {
  return (
    <>
      <img
        src={src}
        className="fixed inset-0 w-full h-full object-cover -z-10"
      />
      <div className="fixed inset-0 w-full h-full backdrop-blur-md -z-10"></div>
    </>
  );
}
