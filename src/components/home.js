import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BASE_URL = 'http://localhost:4000';

function Home(){
    const [categoryList, setCategoryList] = useState([]);
    const [name, setName] = useState('User');
    const [post, setPost] = useState([]);


    const logoutFn = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('id');

        window.location.href = "/";
    }

    useEffect(() => {
        // const data = {};
        setName(localStorage.getItem('name'));
        const data = {
            
        };
        
        axios.post(BASE_URL + '/api/v1/category/all', {})
            .then(function (response) {
                console.log("helllll")
                if (response.data.success) {
                    console.log("hello");
                    setCategoryList(response.data.result);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

            fetchPosts(data);
    }, []);

    const fetchPosts = (data) => {
		axios.post(BASE_URL + '/api/v1/post/all', data)
			.then(function (response) {
				if (response.data.success) {
					setPost(response.data.result);
                    return;
				}
			})
			.catch(function (error) {
				console.log(error);
			});
            console.log(data.name)
            
	}


    return (
        <div>
            <nav className="sticky top-0 z-50 bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#" className="flex">
                <span className="self-center uppercase animate-pulse text-lg font-semibold whitespace-nowrap dark:text-white mr-4">{name}'s</span>
                <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white"></span>
                </a>
                <div></div>
                <div className="flex md:order-2">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={logoutFn}> Logout</button>
                <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                </li>
                <li>
                <a href="/user/details" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"></a>
                </li>
                <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"></a>
                </li>
                </ul>
                </div>
                </div>
            </nav>
            <div className={"flex grid-cols-2"}>
            
            <div className={"flex  md:flex-col px-12 md:border-r-4 border-slate-700 pb-4"}>
                           {
                                categoryList.map((category) => (
                                    <Link to={`/post${category.ID ? `?categories=${category.ID}` : ''}`} className="text-decoration-none  uppercase ">
                                        <div key={category.ID} className="text-white text-center sm:py-1 mx-auto sm:ml-2 mt-6 sm:px-4 md:px-8 md:py-10 bg-slate-500 rounded-lg">
                                            {category.Name}
                                        </div>
                                    </Link>
                                ))
                            }
            </div>

            <div className={"mx-auto relative md:w-2/4 lg:w-1/2"}>
            {
                                post.map((post) => (
                                    <div key={post.id} className="text-black text-center mx-auto">
                                        <div className="flex items-center justify-center mt-12">
                                            <div className="bg-white w-3/4 border shadow-lg px-4 py-3 rounded-lg max-w-lg">
                                                <div className="flex items-center">
                                                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                                                <div className="ml-2">
                                                    <div className="text-sm ">
                                                    <span className="font-semibold">{post.username}</span>
                                                    <span className="text-gray-500"> • 1st</span>
                                                    </div>
                                                    <div className="text-gray-500 text-xs ">Software Engineer at Tesla, Inc</div>
                                                    <div className="text-gray-500 text-xs flex">
                                                    <span className="inline-block">{post.createdAt}</span>
                                                    <svg className="inline-block ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                                                        <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                                                    </svg>
                                                    </div>
                                                </div>
                                                </div>
                                                <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">{post.content}</p>
                                                <div className="text-gray-500 text-xs flex items-center mt-3">
                                                <img className="mr-0.5" src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"/>
                                                <img className="mr-0.5" src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"/>
                                                <img className="mr-0.5" src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97"/>
                                                <span className="ml-1">47 • 26 comments</span>
                                                </div>
                                            </div>
                                        </div>
                                         {/* <Link to={`/post/${post.categories ? `?categories=${post.categories}` : ''}`} className="text-decoration-none  uppercase text-white">{post.id}</Link>
                                         <Link to={`/post/${post.categories ? `?categories=${post.categories}` : ''}`} className="text-decoration-none  uppercase text-white">{post.content}</Link> */}
                                    </div>
                                ))
                            }
            </div>
            </div>

        </div>
    );
}

export default Home;