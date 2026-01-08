const FormPage = () => {
    return (
        <div className="bg-green-700 h-screen flex justify-center items-center">
            <div className="md:h-[80vh] h-[45vh] w-full max-w-7xl bg-red-600 rounded-xl flex justify-center items-center">

                <div className="w-96 h-96 rounded-full bg-white  flex justify-center items-center animate-bounce">
                    <div className="w-88 h-88 rounded-full bg-black  flex justify-center items-center animate-bounce">
                        <div className="w-80 h-80 rounded-full bg-white  flex justify-center items-center animate-bounce">
                            <div className="w-70 h-70 rounded-full bg-black  flex justify-center items-center animate-bounce">
                                <div className="w-60 h-60 rounded-full bg-white  flex justify-center items-center animate-bounce">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center  animate-pulse gap-4 border-2 border-white h-[50%] rounded-full bg-green-600">

                    <div className="bg-white h-20 animate-bounce  w-28 rounded-full flex justify-center items-center">
                        <div className="bg-black size-10 rounded-full flex justify-center items-center">

                        </div>
                    </div>
                    <div className="bg-white h-20 w-28 animate-spin rounded-full flex justify-center items-center">
                        <div className="bg-black size-10 rounded-full flex justify-center items-center">

                        </div>
                    </div>
                    <div className="bg-white h-20 w-28 rounded-full animate-ping flex justify-center items-center">
                        <div className="bg-black size-10 rounded-full flex justify-center items-center">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormPage;