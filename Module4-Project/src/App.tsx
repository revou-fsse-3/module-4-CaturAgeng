// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateCategory from '././components/CreateCategory.tsx';
import DeleteCategory from '././components/DeleteCategory.tsx';
import ListCategory from '././components/ListCategory.tsx';
import UpdateCategory from '././components/UpdateCategory.tsx';
import Login from '././user/Login.tsx';
import Register from '././user/Register.tsx';

const App: React.FC = () => {
return (
<div>
    <h1>My App</h1>
    <Router>
        <Routes>
        <Route path="/create" element={<CreateCategory />} />
        <Route path="/delete" element={<DeleteCategory />} />
        <Route path="/list" element={<ListCategory />} />
        <Route path="/update" element={<UpdateCategory />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>
    </Router>
    </div>
);
}

export default App;
