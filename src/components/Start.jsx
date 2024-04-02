import React from 'react';
import topimage from "../assets/top-image.png";


// ゲームが開始されていない場合はスタート画面を表示
const StartScreen = ({ startGame }) => (
  <div className='flame'>
    <h2>RPG適職診断テスト</h2>
    <img src={topimage} alt="" />
    <button onClick={startGame}>スタート</button>
  </div>
);

export default StartScreen;
