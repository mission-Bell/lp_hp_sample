import Image, { ImageProps } from "next/image";
import { FC, ReactElement } from "react";
import Link from "next/link";

interface WorkItemProps {
    name: string;
    description: string;
    //image: ReactElement<ImageProps>
    imagepath: string;
    linkpath: string;
}


const WorkItem: FC<WorkItemProps> = ({name,description,imagepath,linkpath}) => {
  return (
    <div className="max-w-48 min-w-48">
        <div>
        <Image
            alt="workImage"
            src={imagepath}
            width={200}
            height={200}
            style={{objectFit: 'contain'}}
            className=""
        />
        </div>
        <div className="my-2 text-center underline decoration-dotted">{name}</div>
        <div className="my-2">{description}</div>
        <div className="">
        <Link href={linkpath} className="hover:bg-gray-200 border border-black rounded-full p-2 cursor-pointer block text-center">
        view
        </Link>
        </div>
    </div>
  )
}

export default WorkItem