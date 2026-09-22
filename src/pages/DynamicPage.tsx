import { useParams, Navigate } from 'react-router-dom';
import { servicesBySlug } from '@/data/services';
import { locationsBySlug } from '@/data/locations';
import ServicePage from '@/pages/ServicePage';
import LocationPage from '@/pages/LocationPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function DynamicPage() {
  const { slug } = useParams();

  if (!slug) return <NotFoundPage />;

  if (servicesBySlug[slug]) return <ServicePage />;
  if (locationsBySlug[slug]) return <LocationPage />;

  return <NotFoundPage />;
}
