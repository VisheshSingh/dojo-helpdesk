import CreateTicketForm from './CreateTicketForm';

export const metadata = {
  title: 'Dojo Helpdesk | Create Ticket',
};

export default function CreateTicket() {
  return (
    <main>
      <h2 className='text-primary text-center'>Add a New Ticket</h2>
      <CreateTicketForm />
    </main>
  );
}
