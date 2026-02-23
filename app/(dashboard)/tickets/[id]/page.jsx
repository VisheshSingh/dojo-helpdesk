import { notFound } from 'next/navigation';

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:4000/tickets/${id}`);
  const ticket = await res.json();
  return {
    title: `Dojo Helpdesk | ${ticket.title}`,
  };
}

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets');
  const tickets = await res.json();
  return tickets.map((ticket) => ({
    id: ticket.id.toString(),
  }));
}

async function getTicket(id) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
      next: { revalidate: 30 },
    });
    console.log('API response status:', res.status);
    if (!res.ok) {
      return notFound();
    }
    return res.json();
  } catch (error) {
    console.error('Failed to fetch ticket:', error);
    throw error;
  }
}

export default async function TicketDetails(props) {
  const params = await props.params;
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket details</h2>
      </nav>
      <div className='card my-5'>
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.description}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
