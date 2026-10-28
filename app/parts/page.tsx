'use client';

import { useState } from 'react';
import '../globals.css';
import Kore from "./p1";
import MyCard from "./mycard";
import Nyuryoku from "./nyuryoku";
import Nyuryoku_oya from "./nyuryoku_oya";

export default function Tekitou() {
  const useStateHolder = useState('');
  const [text, setText] = useStateHolder;
  return (
    <>
      <div>パーツわけのページ</div>
      <Kore />
      <MyCard title='カードのタイトル'>
        <div>カードの内容</div>
      </MyCard>
      <MyCard title='なんでも'>
        <div>はいるよ</div>
      </MyCard>
      <Nyuryoku name="in1" />
      <Nyuryoku name="in2" />
      <Nyuryoku_oya name="in3" OyaState={useStateHolder} />
      <MyCard title='おやからみた状況'>
        <div className='mt-4 p-2 bg-yellow-100 rounded'>
          {text !== "" ? "親はいま" : "なにも選択されてないよ"}
          {text === "ひとつめ" && (<div>ひとつめだと判定してるよ</div>)}
          {text === "ふたつめ" && (<div>ふたつめだと判定してるよ</div>)}
          {text === "みっつめ" &&
            (<MyCard title='みっつめの状況'>みっつめだと判定してるよ</MyCard>)}
        </div>
      </MyCard>
    </>
  );
}
