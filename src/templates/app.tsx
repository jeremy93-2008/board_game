import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { Menu } from './menu'
import { Game } from './game'

export function App() {
    return (
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </MemoryRouter>
    )
}
