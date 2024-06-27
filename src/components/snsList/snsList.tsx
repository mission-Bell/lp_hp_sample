import { FaSquareXTwitter,FaInstagram,FaFacebook } from "react-icons/fa6";

const SnsList = () => {
  return (
    <div>
        <h2 className="text-center mt-10 text-2xl underline decoration-dotted">SNS</h2>
        <div className="flex flex-row justify-center gap-10 mt-10 text-center">
            <div className="flex flex-col items-center hover:underline underline-offset-2 cursor-pointer">
                <div><FaInstagram size={"50px"}/></div>
                <div>Instagram</div>
            </div>
            <div className="flex flex-col items-center hover:underline underline-offset-2 cursor-pointer">
                <div><FaSquareXTwitter size={"50px"}/></div>
                <div>X</div>
            </div>
            <div className="flex flex-col items-center hover:underline underline-offset-2 cursor-pointer" >
                <div><FaFacebook size={"50px"}/></div>
                <div>Facebook</div>
            </div>
        </div>
    </div>
  )
}

export default SnsList