import Image from "next/image"
import HeaderImage from '/app/public/headerImage.jpg'

const ImageHeader = () => {
  return (
    <div>
        <div className="relative">
            <Image
                alt="Header Image"
                src={HeaderImage}
                style={{objectFit: 'cover'}}
                className="z-[-1] max-h-[300px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center
            text-white">
                <div className="text-2xl font-bold text-center drop-shadow-md">デジタルソリューションのパートナー</div>
                <div className="text-2xl font-bold text-center drop-shadow-md"> hyomoto</div>
                <div className=" font-bold text-center drop-shadow-md">Email / sju.trantella@gmail.com</div>
                <div className="text-2xl font-bold text-center drop-shadow-md">Service</div>
                <div className="font-bold text-center drop-shadow-md">Webアプリケーション開発 / システムコンサルティング / プログラムカスタマイズ</div>
            </div>
        </div>

    </div>
  )
}

export default ImageHeader