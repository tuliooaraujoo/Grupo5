interface CheckboxFieldProps {
    id: string;
    label: string;
    checked: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const CheckboxField = ({ id, label, checked, onChange, error }: CheckboxFieldProps) => {
    return (
        <div className="flex flex-col mb-6">
            <div className="flex flex-row gap-4 items-center relative">
                <input
                    type="checkbox"
                    id={id}
                    checked={checked}
                    onChange={onChange}
                    className="cursor-pointer border-2 rounded-md w-6 h-6"
                />
                <label htmlFor={id}>{label}</label>
            </div>
            {error && <span className="text-error text-sm">{error}</span>}
        </div>
    );
};

export default CheckboxField;
