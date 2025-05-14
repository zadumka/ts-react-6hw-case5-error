import { fetchNotes } from '@/lib/api';

export default async function NotesPage() {
  const data = await fetchNotes('', 1);

  if (data.notes.length === 0) {
    return <p>No notes found</p>;
  }

  return <NotesClient initialData={data} />;
}
