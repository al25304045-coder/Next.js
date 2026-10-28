'use client';

import { useState, Dispatch, SetStateAction } from 'react';
import MyCard from "./mycard";

type Nyu2Props = {
  name: string;
  OyaState?: [string, Dispatch<SetStateAction<string>>];
};

export default function NyuRyokuPage
  ({ name, OyaState = useState('') }: Nyu2Props)
{
  const [text, setText] = OyaState;
  return (
    <MyCard title='入力結果が親に返る'>
      <label>
        <input
          type="radio"
          name={name}
          value="ひとつめ"
          onChange={(e) => setText(e.target.value)}
        />
        ひとつめ
      </label>
      <label>
        <input
          type="radio"
          name={name}
          value="ふたつめ"
          onChange={(e) => setText(e.target.value)}
        />
        ふたつめ
      </label>
      <label>
        <input
          type="radio"
          name={name}
          value="みっつめ"
          onChange={(e) => setText(e.target.value)}
        />
        みっつめ
      </label>
      <div className='mt-4 p-2 bg-yellow-100 rounded'>
        {text !== "" ? `いま、「${text}」を選択してるよ` : "なにも選択されてないよ"}
      </div>
    </MyCard>
  );
}
