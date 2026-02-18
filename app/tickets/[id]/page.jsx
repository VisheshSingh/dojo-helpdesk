export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets');
  const tickets = await res.json();
  return tickets.map((ticket) => ({
    id: ticket.id.toString(),
  }));
}

export default async function Ticket({ params }) {
  const res = await fetch(`http://localhost:4000/tickets/${params.id}`);
  const ticket = await res.json();

  return <div>{ticket.title}</div>;
}
