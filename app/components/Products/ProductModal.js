import { Dialog, DialogContent } from "@/components/ui/dialog";
import Product from "./Product";

const ProductModal = ({ product, open, handleOpen }) => {
  return (
    <Dialog
      open={open}
      onOpenChange={handleOpen}
      className="flex items-center justify-center"
    >
      <DialogContent className="w-auto max-w-full">
        <Product product={product} />
      </DialogContent>
    </Dialog>
  );
};
export default ProductModal;
