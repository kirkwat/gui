//TODO make cart page
//TODO get context working
//TODO update profiledetails page (atc and add reviews)
//TODO get buttons to bottom of card

import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import { MyRoutes } from './routes';
import { CartContextProvider } from './context';

export const App = () => <CartContextProvider>
    <BrowserRouter>
        <header className='bg-dark text-white p-2 ps-3 fs-4'>
            <Link to={`/`} className="text-decoration-none text-white">
                Store
            </Link>
        </header>
        <Routes>
            <Route>
                {
                    MyRoutes().map((route, index) => <Route key={index} {...route} />)
                }
            </Route>
        </Routes>
    </BrowserRouter>
</CartContextProvider>;