import TicketList from '../components/TicketList';

export default async function Tickets() {
  return (
    <main>
      <h1>Tickets</h1>
      <p><small>Curently open tickets</small></p>

      <TicketList />
    </main>
  );
}
