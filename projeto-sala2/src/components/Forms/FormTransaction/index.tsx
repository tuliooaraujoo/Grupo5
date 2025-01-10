import TextField from "@/components/Inputs/TextField"
import Button from "@/components/Button"
import SelectorField from "@/components/Inputs/SelectorField"

const FormTransaction = () => {

    return (
        <form className="flex flex-col gap-8 w-2/4 p-8 h-1/2  bg-background bg-no-repeat rounded-lg">
            <h4 className="text-xl font-bold my-8">Nova Transação</h4>
            <SelectorField />
            <TextField
                id="Value"
                placeholder="R$ 00,00"
                className="w-60"
            />
            <Button text="Acessar" className="bg-blue text-white w-60" onClick={() => { }} />
        </form>
    )
}

export default FormTransaction