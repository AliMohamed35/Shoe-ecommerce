export default function DividerInShop() {
    return <>
        <section className="bg-[url(/divider.jpg)] h-[500px] flex justify-center items-center text-white">
            <div className="text-center flex flex-col justify-center items-center px-2">
                <h2 className="text-4xl sm:text-5xl py-8 font-bold">Better for people & the planet</h2>
                <p className="text-xl">Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est dictum in vulputate</p>

                <div className="text-white flex w-full flex-col px-2 sm:flex-row sm:gap-4 sm:items-center sm:justify-center">
                    <button className="bg-black border-2 border-white cursor-pointer p-4 mt-8">Shop for Men</button>
                    <button className="bg-black border-2 border-white cursor-pointer p-4 mt-8">Shop for Women</button>
                </div>
            </div>

        </section>
    </>
}