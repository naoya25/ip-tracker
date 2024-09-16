import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-[100vh]">
      <Image src="/pay_img.png" alt="paypay" fill className="object-contain" />
    </div>
  );
}
