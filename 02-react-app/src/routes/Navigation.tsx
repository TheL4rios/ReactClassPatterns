import { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Navigate
} from "react-router-dom";

import reactLogo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <Router>
                <div className="main-layout">
                    <nav>
                        <img src={reactLogo} alt="React logo" />
                        <ul>
                            {
                                routes.map((route, i) => (
                                    <li key={i}>
                                        <NavLink end to={route.path}>{route.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map((route, i) => (
                                <Route key={i} path={route.path} element={<route.Component />} />
                            ))
                        }

                        <Route path="*" element={<Navigate to="/lazyload" />} />
                    </Routes>
                </div>
            </Router>
        </Suspense>
    );
}