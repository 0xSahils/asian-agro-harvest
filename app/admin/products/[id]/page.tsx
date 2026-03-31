import ProductForm from '@/components/ProductForm';

export default function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="p-8">
      <ProductForm productId={params.id} />
    </div>
  );
}
