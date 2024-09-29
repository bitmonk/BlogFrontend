import axios from "axios"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react";


function Home() {
    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async () => {
        const response = await axios.get("https://blogbackend-bc6e.onrender.com/blog");
        setBlogs(response.data.data)

    }
    useEffect(() => {
        fetchBlogs()
    }, [])
    return (
        <>
            <Navbar />
            <div className="flex flex-wrap">
                {
                    blogs.map((blog) => {
                        console.log(blog.image);

                        return (
                            <Card blog={ blog } />
                        )
                    })

                }

            </div>
        </>
    )
}

export default Home
