'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateTicketForm() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const ticketData = {
      title,
      description,
      priority,
      user_email: 'mario@netninja.dev',
    };

    const res = await fetch('http://localhost:4000/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticketData),
    });

    if (res.ok) {
      setLoading(false);
      router.push('/tickets');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-1/2'>
      <div className='mb-4'>
        <label className='block text-gray-700'>Title:</label>
        <input
          type='text'
          className='w-full border rounded px-3 py-2'
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Description:</label>
        <textarea
          className='w-full border rounded px-3 py-2'
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Priority:</label>
        <select
          className='w-full border rounded px-3 py-2'
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </select>
      </div>
      <button
        type='submit'
        className='bg-primary text-white px-4 py-2 rounded'
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create Ticket'}
      </button>
    </form>
  );
}
