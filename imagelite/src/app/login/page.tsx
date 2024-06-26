'use client'
import{ Template, InputText, RenderIf, Button } from '@/components'
import{ useState } from 'react'


export default function Login(){
    const [loading, setLoading] = useState<boolean>(false);
    const [newUser, setNewUser] = useState<boolean>(false);

    return (
        <Template loading={loading}>
             <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                       {newUser ? 'Cadastro' : 'Login'}
                    </h2>

               
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <RenderIf condition={newUser}>

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
                        <RenderIf condition={!newUser}>

                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Esqueceu senha?
                                </a>
                            </div>
                        </RenderIf>
                    </div>
                    <div className="mt-2">
                        <InputText 
                            style="w-full" 
                            id="senha"
                            type='password'/>
                    </div>
                    </div>

                    <div>
                        <RenderIf condition={newUser}>
                            <Button type='submit' style='bg-indigo-950 hover:bg-indigo-700' label='salvar'/>
                            <Button type='button' style='bg-red-950 hover:bg-red-700 mx-3' label='cancelar' onClick={event => setNewUser(false)}/>

                    
                        </RenderIf>
                        <RenderIf condition={!newUser}>
                            <Button type='submit' style='bg-indigo-950 hover:bg-indigo-700' label='entrar'/>
                            <Button type='button' style='bg-red-950 hover:bg-red-700 mx-3' label='cadastrar' onClick={event => setNewUser(true)}/>
                            
                        </RenderIf>
                    </div>
                </form>

              
                </div>
            </div>
        </Template>
    )
}