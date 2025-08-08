import Image from 'next/image';
import Link from 'next/link';
type ProfileProps = {
  name: string;
  image?: string;
  additionalInfo?: string;
  id: string;
};
const Profile = ({ name, image, additionalInfo, id }: ProfileProps) => {
  return (
    <Link className="flex items-center gap-4 p-2" href={`/mydog/${id}/profile`}>
      <div className="relative h-12 w-12">
        <Image
          src={image ? image : '/images/dog-profile.png'}
          alt="Profile Image"
          fill
          className="rounded-full border-2 border-[var(--color-border)] object-cover"
        />
      </div>
      <div>
        <div className="text-base font-semibold text-[var(--color-text-title)]">{name}</div>
        <div className="text-sm text-[var(--color-text-subtitle)]">{additionalInfo}</div>
      </div>
    </Link>
  );
};

export default Profile;
