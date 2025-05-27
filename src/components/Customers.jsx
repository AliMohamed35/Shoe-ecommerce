function Customers() {

    let dummyCards = [
        { id: 1, comment: '“Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer”', avatar: '', name: 'JULIA KEYS' },
        { id: 2, comment: '“Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer”', avatar: '', name: 'LUIS ADRIAN' },
        { id: 3, comment: '“Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer”', avatar: '', name: 'MARIA ANNA' },
        { id: 4, comment: '“Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer”', avatar: '', name: 'MARIA ANNA' }
    ]

    return (
        <>
            <section className="min-h-[500px] flex flex-col text-center my-10 justify-center items-center">
                <h1 className="text-3xl sm:text-2xl md:text-4xl mb-15">Our customers speak for us</h1>

                <div className="flex p-4 gap-20 flex-col sm:flex-row h-full">
                    {dummyCards.length == 0 ? (
                        <p>'No Customers'</p>
                    ) : dummyCards.map((item) => <div key={item.id} className="w-[300px] border-1 border-gray-700  text-black p-8 shadow-lg">
                        {/* Rating */}
                        <h2 className="text-start text-xl mb-10">{item.comment}</h2>
                        <div className="items-center gap-4 flex ">
                            <div className="w-[30px] h-[30px] rounded-full bg-red-400"></div>
                            <h3>{item.name}</h3>
                        </div>
                    </div>)}
                </div>
            </section>
        </>
    )
}

export default Customers
