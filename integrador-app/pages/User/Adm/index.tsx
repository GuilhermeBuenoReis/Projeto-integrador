import React from "react";

import NavBar from "@/components/navBar";

import Link from "next/link";

import { Trash, Plus, List, FileUp } from 'lucide-react'

const AdmUser = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <NavBar />
            <main className="flex items-center justify-center w-screen h-screen">
                <aside className="h-5/6 w-1/5 fixed left-0 flex flex-col gap-3">
                    <Link href={`/`} className="flex items-center gap-4">
                        <Plus />
                        <p className="text-lg">Adicionar Filme</p>

                    </Link>

                    <Link href={`/`} className="flex items-center gap-4" >
                        <Trash />
                        <p className="text-lg">Excluir Filme</p>

                    </Link >

                    <Link href={`/`} className="flex items-center gap-4">
                        <List />
                        <p className="text-lg">Listar filmes</p>

                    </Link>

                    <Link href={`/`} className="flex items-center gap-4">
                        <FileUp />
                        <p className="text-lg">Atualizar Filme</p>

                    </Link>

                </aside>
            </main>
        </div>
    )
}

export default AdmUser;