import Button from "@/components/Button";

interface PopUpProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onSubmit: () => void;
  children: React.ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({
  isOpen,
  title,
  onClose,
  onSubmit,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        <h2 className="text-xl mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
        <div className="flex justify-between">
          <Button text="Cancelar" onClick={onClose} className="bg-blue text-white p-2 rounded" />
          <Button text="Salvar" onClick={onSubmit} className="bg-blue text-white p-2 rounded" />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
