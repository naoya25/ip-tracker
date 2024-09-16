import Image from "next/image";

export default function Home() {
  return (
    <div className="m-0 p-0 relative w-[100vw] h-[100vh]">
      <Image src="/pay_img.png" alt="paypay" fill className="object-contain" />
    </div>
  );
}
