import Link from 'next/link';

// Emergency hotlines
const hotlines = [
  { icon: 'shield-fill', label: 'ZCPO', number: '0977-855-8138', tel: '09778558138' },
  { icon: 'exclamation-triangle-fill', label: 'DRRMO', number: '991-0000', tel: '0629910000' },
  { icon: 'fire', label: 'Fire', number: '991-2267', tel: '0629912267' },
  { icon: 'hospital-fill', label: 'ZCMC', number: '991-3891', tel: '0629913891' },
  { icon: 'building-fill', label: 'City Hall', number: '991-2295', tel: '0629912295' },
];

export default function HotlineBar() {
  return (
    <div className="bg-bz-accent-red text-white text-xs py-2 w-full">
      <div className="w-full px-6 flex items-center justify-center gap-6">
        {/* 911 - Primary Emergency Hotline */}
        <Link
          href="tel:911"
          className="flex items-center gap-1.5 hover:opacity-90 transition-opacity whitespace-nowrap bg-yellow-400 text-red-900 px-3 py-1 rounded-full font-bold text-sm"
        >
          <i className="bi bi-exclamation-octagon-fill"></i>
          <span>911</span>
        </Link>

        <span className="text-white/50">|</span>

        {hotlines.map((item, index) => (
          <Link
            key={index}
            href={`tel:${item.tel}`}
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            <i className={`bi bi-${item.icon}`}></i>
            <span>{item.label}: {item.number}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
