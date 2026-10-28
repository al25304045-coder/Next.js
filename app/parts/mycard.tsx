import { ReactNode } from 'react';

export default function Tekitou
  ({ title, children }: { title: string; children: ReactNode })
{
  return (
    <div className="m-5 p-5 bg-blue-200 rounded-lg">
      <span className='font-bold text-xs'>{title}</span>
      <hr />
      {children}
    </div>
  );
}
