import { useFormContext } from "react-hook-form"
import { FormHeader, SearchFormContainer } from "./styles"
import { SearchFormInput } from "../.."


interface SearchFormProps {
    postsAmount: number
}

export function SearchForm ({ postsAmount }: SearchFormProps) {
    const { register } = useFormContext<SearchFormInput>()


    return (
        <SearchFormContainer>
            <fieldset>
                <FormHeader>
                    <legend>Posts</legend>
                    <span>
                        {postsAmount} {postsAmount > 1 ? 'posts' : 'post'}
                    </span>
                </FormHeader>
                <label htmlFor="query">Buscar Conteúdo</label>
                <input 
                    aria-label="Content Search"
                    type="text"
                    placeholder="Content Search"
                    id="query"
                    {...register('query')}
                />
            </fieldset>
        </SearchFormContainer>
    )
}