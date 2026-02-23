import { Suspense } from 'react';
import TicketList from '../../components/TicketList';
import Loading from '../loading';

export const metadata = {
  title: 'Dojo Helpdesk | Tickets',
};

export default async function Tickets() {
  return (
    <main>
      <h1>Tickets</h1>
      <p>
        <small>Curently open tickets</small>
      </p>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
