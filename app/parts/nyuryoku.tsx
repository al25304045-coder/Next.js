'use client';

import { useState } from 'react';
import MyCard from "./mycard";

export default function NyuRyokuPage({ name }: { name: string })
{
  const [text, setText] = useState('');
  return (
    <MyCard title='入力されたら別のとこに表示'>
      <input
        type="text"
        name={name}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="なんかうって"
        className='w-full my-2 p-2 bg-gray-100 rounded'
      />
      <div className='mt-4 p-2 bg-yellow-100 rounded'>
        <strong>表示枠: </strong>
        {text}
      </div>
    </MyCard>
  );
}
