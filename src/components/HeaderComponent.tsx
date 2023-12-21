"use client"
import { IconMenu, IconX } from '@tabler/icons-react';
import { env } from 'process'
import React, { useState } from 'react'
import Drawer from './Drawer';

const HeaderComponent = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    const DrawerButton = () => {
        return <span className="text-white" onClick={toggleOpen}>
            {isOpen ? <IconX stroke={1.5} size={18} /> : <IconMenu stroke={1.5} size={18} />}
        </span>;
    }

    return (
        <div>
            <div className="p-5 border-b-2 border-b-slate-900 bg-slate-800 drop-shadow-lg text-white sticky text-xs md:text-sm">
                <div className="flex items-center space-x-6">
                    <span className="inline lg:hidden">
                        <DrawerButton />
                    </span>
                    <span>
                        Drop Ship 200
                    </span>
                </div>
            </div>
            <div
                className="bg-stone-900/10"
            >
                <div
                    className="fixed w-full"
                    onClick={() => setIsOpen(false)}
                    style={{
                        left: isOpen ? 0 : "-100%",
                        opacity: isOpen ? 1 : 0,
                        transition: ".3s",
                    }}
                >
                    <div
                        className="w-[230px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Drawer />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HeaderComponent