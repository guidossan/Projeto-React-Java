'use client'
import{ Template, InputText, RenderIf } from '@/components'
import{ useState } from 'react'


export default function Login(){
    const [loading, setLoading] = useState<boolean>(false);
    const [newUser, setNewUser] = useState<boolean>(false);

    return (
        <Template loading={loading}>
             <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <RenderIf>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Cadastro
                    </h2>

                </RenderIf>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <RenderIf>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Nome
                        </label>
                        <div className="mt-2">
                            <InputText 
                                style="w-full" 
                                id="nome"/>
                        </div>
                    </div>
                    </RenderIf>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Endereço de email
                    </label>
                    <div className="mt-2">
                        <InputText 
                            style="w-full" 
                            id="email"/>
                    </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Senha
                        </label>
                        <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Esqueceu senha?
                        </a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <InputText 
                            style="w-full" 
                            id="senha"
                            type='password'/>
                    </div>
                    </div>

                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                    </div>
                </form>

              
                </div>
            </div>
        </Template>
    )
}