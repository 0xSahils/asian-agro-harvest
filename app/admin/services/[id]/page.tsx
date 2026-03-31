import ServiceForm from '@/components/ServiceForm';

export default function EditServicePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="p-8">
      <ServiceForm serviceId={params.id} />
    </div>
  );
}
