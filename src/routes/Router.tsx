

import { createBrowserRouter } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
// import Home from "../pages/Home";

import InnerPageLayout from "../layouts/InnerPageLayout";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Blog from "../pages/Blog";
// import Services from "../pages/Services";
// import BlogPage from "../pages/BlogPage";
import { BLOG_POSTS } from "../data/Blogposts";
// import SignIn from "../pages/auth/SignIn";
// import CreateAccount from "../pages/auth/CreateAccount";
// import Dashboard from "../pages/auth/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";
import { lazy } from "react";

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Blog = lazy(() => import('../pages/Blog'))
const Services = lazy(() => import('../pages/Services'))
const BlogPage = lazy(() => import('../pages/BlogPage'))
const SignIn = lazy(() => import('../pages/auth/SignIn'))
const CreateAccount = lazy(() => import('../pages/auth/CreateAccount'))
const Dashboard = lazy(() => import('../pages/auth/Dashboard'))

export const router = createBrowserRouter([
    {
        path: "/", element: <PageLayout />, children: [
            { index: true, element: <Home /> },
            {
                element: <InnerPageLayout />, children: [
                    { path: 'about', element: <About />, handle: { header: 'About Us' } },
                    { path: 'services', element: <Services />, handle: { header: 'Our Services' } },
                    {
                        path: 'blog', children: [
                            { index: true, element: <Blog />, handle: { header: 'Latest from Blog' } },
                            {
                                path: ':slug', element: <BlogPage />,
                                loader: ({ params }: LoaderFunctionArgs) => {
                                    const post = BLOG_POSTS.find(p => p.slug === params.slug);
                                    if (!post) throw new Error("Not Found");
                                    return post;
                                },
                                handle: { header: (data: { title: string }) => data.title }
                            }
                        ]
                    },

                    { path: 'contact', element: <Contact />, handle: { header: 'Contact Us' } },
                ]
            }, {
                path: 'sign-in', element: <SignIn />
            }, {
                path: 'create-an-account', element: <CreateAccount />
            }, {
                path: 'dashboard', element: <ProtectedRoute><Dashboard /></ProtectedRoute>
            },
        ]
    }
]);