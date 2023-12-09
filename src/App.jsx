import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
    About,
    Cart,
    Checkout,
    Error,
    HomeLayout,
    Landing,
    Login,
    Orders,
    Products,
    Register,
    SingleProduct,
} from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Landing />, errorElement: <Error /> },
            { path: "product", element: <Products />, errorElement: <Error /> },
            { path: "product:id", element: <SingleProduct />, errorElement: <Error /> },
            { path: "cart", element: <Cart />, errorElement: <Error /> },
            { path: "about", element: <About />, errorElement: <Error /> },
            { path: "checkout", element: <Checkout />, errorElement: <Error /> },
            { path: "orders", element: <Orders />, errorElement: <Error /> },
        ],
    },
    { path: "login", element: <Login />, errorElement: <Error /> },
    { path: "register", element: <Register />, errorElement: <Error /> },
]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
