import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/images/logo_with_text.svg"
        alt="prontuMed Logo"
        width={180}
        height={45}
        priority
      />
    </Link>
  );
}
