import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#9B77E7] to-[#1600A0] flex items-center justify-center px-4 py-8 font-poppins">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <Image src="/logo.png" alt="Logo" width={100} height={100} className="mx-auto md:mx-0 mb-4" />
          <h1 className="text-4xl md:text-[48px] font-bold leading-tight md:leading-[70px] text-white mb-4">
            Muhammad Sufyan jutt
          </h1>
          <h2 className="text-xl md:text-[24px] font-medium leading-relaxed md:leading-[30px] text-white">
            Web Developer & Designer
          </h2>
        </div>
        <div className="flex justify-center">
          <Image src="/laptop.png" alt="Laptop" width={500} height={300} className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
