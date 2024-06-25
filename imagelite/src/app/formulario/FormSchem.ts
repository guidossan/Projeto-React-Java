import * as Yup from 'yup'

export  interface FormProps {
    name: string;
    tags: string;
    file: any;
}


export const formsScheme: FormProps ={ name: '', tags: '', file: ''}

export const formValidationScheme  = Yup.object().shape({
    name: Yup.string().trim().required('Nome é obrigatório!').max(50, "tamanho máximo de 50"),
    tags: Yup.string().trim().required('Passe ao menos uma tag!').max(50, "tamanho máximo de 50")
}) 