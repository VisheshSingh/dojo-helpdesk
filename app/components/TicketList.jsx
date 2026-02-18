async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets');
  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className='card my-5'>
          <h2 className='text-lg font-semibold'>{ticket.title}</h2>
          <p className='text-gray-500'>{ticket.description.slice(0, 100)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ))}
      {tickets.length === 0 && <p>No open tickets</p>}
    </>
  );
}
