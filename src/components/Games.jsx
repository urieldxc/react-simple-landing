import { Github } from "lucide-react"
import { games } from "../constants"

const Games = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <div>

                <h3 className="w-40 mx-auto text-md sm:text-lg lg:text-lg text-center tracking-wide text-orange-500 bg-neutral-800/80 rounded-md py-2 px-4">
                    OUR GAMES
                </h3>

                <p className="sm:text-2xl md: text-5xl lg:text-5xl  mt-20 text-center  max-w-4xl">
                    Check our
                    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                        {" "}latest projects
                    </span>
                </p>
            </div>

            <div className="flex flex-wrap mt-10 lg:mt-20">
                {games.map(game => (
                    <div key={crypto.randomUUID()} className="w-full sm:1/2 lg:w-1/3 p-4">
                        <div className="flex flex-col py-4">
                            <img src={game.image} className="h-60 w-full"></img>
                            <div className="py-6 h-72 flex flex-col justify-between">
                                <div>

                                    <h4 className="text-xl pb-2">
                                        {game.name}
                                    </h4>

                                <p className="text-neutral-400 my-2 text-base/6">{game.description}</p>
                                </div>

                                <div className="flex space-x-4 py-4" >

                                    <a href={"#"} className="border py-2 px-2 rounded-md">
                                        Whishlist on Steam
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Games