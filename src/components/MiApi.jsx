import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Pokemon from './Pokemon/Pokemon';

const MiApi = () =>
{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/:id' element={<Pokemon />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MiApi
