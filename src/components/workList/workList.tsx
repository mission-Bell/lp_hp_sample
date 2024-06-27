import WorkItem from "./workItem/workItem"

const WorkList = () => {
    const taskprops = [
        {
            name: "21Quest",
            description: "トランプゲーム「ブラックジャック」を行うRestAPI",
            imagePath: "/headerImage.jpg",
            linkpath: "https://github.com/mission-Bell/WordCraft"
        },
        {
            name: "BabaNavi2024",
            description: "トランプゲーム「ババ抜き」を行うWebアプリケーション",
            imagePath: "/headerImage.jpg",
            linkpath: "https://github.com/mission-Bell/WordCraft"
        },
        {
            name: "WordCraft",
            description: "MS Wordの文言変換を行う業務ツール",
            imagePath: "/headerImage.jpg",
            linkpath: "https://github.com/mission-Bell/WordCraft"
        },
        {
            name: "LP_HP_sample",
            description: "このHP",
            imagePath: "/headerImage.jpg",
            linkpath: "https://github.com/mission-Bell/WordCraft"
        }

    ]
  return (
    <div>
        <h2 className="text-center mt-10 text-4xl underline decoration-dotted">Wokrs</h2>
        <div className="text-center mt-2">制作実績</div>
        <h3 className="bg-black inline-block text-gray-50 px-5 m-5">Webアプリケーション開発</h3>
        <div className="flex justify-center gap-10 overflow-auto">
        {
            taskprops.map((item) => (
                <WorkItem
                key={item.name}
                name={item.name}
                description={item.description}
                imagepath={item.imagePath}
                linkpath={item.linkpath}
            />    
            ))
        }
        </div>
    </div>
  )
}

export default WorkList