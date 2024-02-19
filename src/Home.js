import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

    // const handleClick = (e) => {
    //     console.log("Inside Click Handler", e);
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log("Inside Click again Handler " + name, e.target);
    // }
    
    //not reactive, React does not watch this for changes
    // let name = "Harishmitha";
    // const handleClick = () => {
    //     name = "Harish"
    //     console.log(name);
    // }

    //initial value (contains changed value), method to change value
    //can be of any data type
    // const [name, setName] = useState("Harishmitha"); // "initialValue"

    // const handleClick = () => {
    //     setName("Harish")
    // }

    // const [name, setName] = useState("Rangu")

    //should not update state in udeEffect since useState rerenders which leads to useEffect rerun and goes on indefinitely

    // const [blogs, setBlogs] = useState(null)
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);


    // useEffect(() => {
        
    //     setTimeout(() => {
    //         fetch("http://localhost:8000/blogs")
    //         .then((res) => {
    //             console.log(res);
    //             if(!res.ok) {
    //                 throw Error("Could not load data for that resource");
    //             }
    //         return res.json();
    //         })
    //         .then((data) => {
    //             setBlogs(data);
    //             setIsPending(false);
    //             setError(null);
    //         })
    //         .catch((err) => {
    //             setError(err.message);
    //             setIsPending(false);
    //         })
    //     }, 1000)
        
    // }, []); // second arg - dependency array, empty means runs only once after first
            // can add state whose changes should be detected and rerun useEffect

    // const handleDelete = (id) => {
    //     //does not change original array. Creates a copy
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    
    //rerenders whenever state changes
    // const [blogs, setBlogs] = useState([
    //     { title: 'Tech Blog', body: 'lorem ipsum...', author: 'Harishmitha', id: 1 },
    //     { title: 'Lifestyle Blog', body: 'lorem ipsum...', author: 'John', id: 2 },
    //     { title: 'Science Blog', body: 'lorem ipsum...', author: 'Harishmitha', id: 3 }
    // ])

    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    
    return (
        <div className="home">

            {/* props - to send data from parent to child component */}
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}



            {/* {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}></BlogList>} */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Harishmitha")} title="Harishmitha's Blogs"></BlogList> */}

            {/* <h2>Home Component</h2> */}
            {/* <button onClick={handleClick}>Click Me</button> */}
            
            {/* name does not update in UI but it actually changes (console.log) */}
            {/* <p>{name}</p> */}

            {/* wrapped inside anonymous function so it won't be triggered */}
            {/* we don't automatically get event as first arg because its not passed a reference, its anonymous so need to pass explicitly */}
            {/* <button onClick={(e) => handleClickAgain("Harishmitha", e)}>Click me again</button> */}


            {/* <button onClick={() => setName("Rangu !!")}>Change Name</button>
            <p>{name}</p> */}
        </div>
     );
}
 
export default Home;