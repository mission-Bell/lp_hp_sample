import Image from "next/image"

const ProfileBlock = () => {
  return (
    <div>
        <h2 className="text-center mt-10 text-4xl underline decoration-dotted">Profile</h2>
        <div className="text-center mt-2">自己紹介</div>
        <div className="flex justify-center gap-6 h-96 mt-10">

            <div className="relative w-full">
            <Image
            alt="workImage"
            src="/headerImage.jpg"
            fill
            style={{objectFit: 'cover'}}
            className=""
        />
            </div>
            <div className=" w-full p-3">
                <div>hyomoto</div>
                <div className="mt-2">ソフトウェア開発者 / システムエンジニア</div>
                <div className="mt-4">経歴：</div>
                <div className="mt-2">システム運用保守会社にて2年半、SIerにて４年勤務しWebシステムの開発やAWSなどのクラウドサービスを担当</div>
                <div className="mt-4">専門分野：</div>
                <ul className="mt-2">
                    <li>サーバサイド技術（Javaが最も得意）</li>
                    <li>フルスタック対応（サーバサイド、インフラ構築、フロントエンド）</li>
                    <li>クラウドサービスの活用（AWSなど）</li>
                </ul>
                <div className="mt-4">今後の展望：</div>
                <div className="mt-2">TypeScriptやPythonをメインにした開発に注力。さらなるスキルアップと価値貢献を目指す。</div>

            </div>
        </div>
    </div>
  )
}

export default ProfileBlock