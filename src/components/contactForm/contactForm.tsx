const ContactForm = () => {
  return (
    <div>
        <h2 className="text-center mt-10 text-4xl underline decoration-dotted">Contact</h2>
        <div className="text-center mt-2">お問い合わせ先</div>
        <div className="flex flex-col items-center">
            <label htmlFor="name" className="p-1   w-1/2 mt-2">お名前
                <input type="text" id="name" className="border border-black rounded-full p-2 mt-3 block w-full" />
            </label>
            <label htmlFor="phoneNumber" className="p-1 w-1/2 mt-2">電話番号
                <input type="tel" id="phoneNumber" className="border border-black rounded-full p-2 mt-3 block w-full" />
            </label>
            <label htmlFor="emailAddress" className="p-1 w-1/2 mt-2">メールアドレス
                <input type="email" id="emailAddress" className="border border-black rounded-full p-2 mt-3 block w-full" />
            </label>
            <label htmlFor="phoneNumber" className="p-1 w-1/2 mt-2">お問い合わせ種別
                <select name="test" id="test" className="block border border-black rounded-full p-2 mt-3 w-full">
                    <option value="test1">お仕事のご依頼</option>
                    <option value="test2">その他</option>
                </select>
            </label>
            <label htmlFor="phoneNumber" className="p-1 w-1/2 mt-2">お問い合わせ内容
                <textarea id="phoneNumber" rows={5} cols={33} className="border border-black rounded-md p-2 mt-3 block w-full" />
            </label>
            <form action="" className="mt-4 w-1/2 flex justify-center">
                <button type="submit" className="hover:bg-gray-200 border border-black rounded-full p-2 cursor-pointer block text-center w-1/3">送信</button>
            </form>


        </div>
    </div>
  )
}

export default ContactForm