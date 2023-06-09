// import {lazy, Suspense} from 'react';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// import AppHeader from "../appHeader/AppHeader";
// import Spinner from '../spinner/Spinner';

// const Page404 = lazy(() => import('../pages/404'));
// const MainPage = lazy(() => import('../pages/MainPage'));
// const ComicsPage = lazy(() => import('../pages/ComicsPage'));
// const SingleComicLayout = lazy(() => import('../pages/SingleComicLayout/SingleComicLayout'));
// const SingleCharacterLayout = lazy(() => import('../pages/SingleCharacterLayout/SingleCharacterLayout'));
// const SinglePage = lazy(() => import('../pages/SinglePage'));

// const App = () => {
//     return (
//         <Router>
//             <div className="app">
//                 <AppHeader/>
//                 <main>
//                     <Suspense fallback={<Spinner/>}>
//                         <Routes>
//                             <Route path="/">
//                                 element={<MainPage/>}
//                             </Route>
//                             <Route path="/comics">
//                             element={<ComicsPage/>}
//                             </Route>
//                             <Route path="/comics/:id">
//                             element={<SinglePage Component={SingleComicLayout} dataType='comic'/>}
//                             </Route>
//                             <Route path="/characters/:id">
//                                 element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}
//                             </Route>
//                             <Route path="*">
//                                 element={<Page404/>}
//                             </Route>
//                         </Routes>
//                     </Suspense>
//                 </main>
//             </div>
//         </Router>
//     )
// }

// export default App;

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SinglePage = lazy(() => import('../pages/SinglePage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));
const SingleComicLayout = lazy(() => import('../pages/SingleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/SingleCharacterLayout/SingleCharacterLayout'));

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<MainPage/>}/>
                            <Route path="/comics" element={<ComicsPage/>}/>
                            <Route path='*' element={<Page404/>}/>
                            <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
                            <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic'/>}/>
                            <Route path="/character/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}


export default App;