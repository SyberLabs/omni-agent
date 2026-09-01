import { redirect } from 'next/navigation';

// The surface IS the product; `/` is not a second front door.
export default function Home() {
    redirect('/surface');
}
