import React, { useState } from 'react';
import "./App.css";
import topimage from "./assets/top-image.png";
import warrior from "./assets/warrior.png";
import wizard from "./assets/wizard.png";
import hunter from "./assets/hunter.png";
import healer from "./assets/healer.png";

// 各性格タイプに合わせた具体的な質問文を設定
const questions = [
  // 戦士タイプの質問
  { id: 1, text: "困難な状況に直面したときほど底力を発揮できる", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 2, wizard: 0, hunter: 0, healer: 0 }},
  { id: 2, text: "他人よりも素早く勇敢な決断ができると思う", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 2, wizard: 0, hunter: 0, healer: 0 }},
  { id: 3, text: "チームやプロジェクトのリーダーになるのが好きだ", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 2, wizard: 0, hunter: 0, healer: 0 }},
  { id: 4, text: "どちらかというと競争が激しい環境の方が好きだ", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 2, wizard: 0, hunter: 0, healer: 0 }},
  { id: 5, text: "自分や組織の成功のためなら、積極的にリスクをとれる", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 2, wizard: 0, hunter: 0, healer: 0 }},
  
  // 魔法使いタイプの質問
  { id: 6, text: "新しいアイデアを考えることに夢中になることがある", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 0, wizard: 2, hunter: 0, healer: 0 }},
  { id: 7, text: "抽象的な概念を理解することは得意な方だと思う", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 0, wizard: 2, hunter: 0, healer: 0 }},
  { id: 8, text: "既存の方法にとらわれず、独自の解決策を見つけることが得意だ", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 0, wizard: 2, hunter: 0, healer: 0 }},
  { id: 9, text: "複雑な問題を解決するには、創造的なアプローチが必要だと思う", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 0, wizard: 2, hunter: 0, healer: 0 }},
  { id: 10, text: "学問的な研究や理論に深い関心がある方だ", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 0, wizard: 2, hunter: 0, healer: 0 }},
  
  // ハンタータイプの質問
  { id: 11, text: "知らない場所を訪れたり、五感を使う体験が好きだ", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 0, wizard: 0, hunter: 2, healer: 0 }},
  { id: 12, text: "目先の利益にとらわれず、物事を長期的な目線で判断できる", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 0, wizard: 0, hunter: 2, healer: 0 }},
  { id: 13, text: "運動能力にはかなり自信がある方だと思う", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 0, wizard: 0, hunter: 2, healer: 0 }},
  { id: 14, text: "どのような環境でも高い集中力を発揮する方法を心得ている", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 0, wizard: 0, hunter: 2, healer: 0 }},
  { id: 15, text: "自分は土地や組織への環境適応能力は高い方だと思う", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 0, wizard: 0, hunter: 2, healer: 0 }},
  
  // ヒーラータイプの質問
  { id: 16, text: "他人の気持ちに敏感で、共感することができる", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 0, wizard: 0, hunter: 0, healer: 2 }},
  { id: 17, text: "困っている人を助けることにやりがいを感じる", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 0, wizard: 0, hunter: 0, healer: 2 }},
  { id: 18, text: "チームやコミュニティの調和を保つために力を注ぎたい", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 0, wizard: 0, hunter: 0, healer: 2 }},
  { id: 19, text: "自分よりも他人を優先することが多い方だ", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 0, wizard: 0, hunter: 0, healer: 2 }},
  { id: 20, text: "なによりも争いごとはとにかく一番苦手だ", options: ["はい", "どちらともいえない", "いいえ"], score: { warrior: 0, wizard: 0, hunter: 0, healer: 2 }},
];

const calculateResult = (answers) => {
  // 各性格タイプの初期スコアを設定
  let scores = { warrior: 0, wizard: 0, hunter: 0, healer: 0 };
  // ユーザーの回答を順番に処理
  answers.forEach((answer, index) => {
    const question = questions[index]; // 現在の質問を取得
    const scoring = question.score; // 現在の質問のスコアリングオブジェクトを取得

    // 各性格タイプに対してスコアを加算
    Object.keys(scoring).forEach(type => {
       // 回答が「はい」の場合は2点、「どちらともいえない」の場合は1点、「いいえ」の場合は0点を加算
      scores[type] += scoring[type] * (answer === "はい" ? 2 : answer === "どちらともいえない" ? 1 : 0);
    });
  });
   // 最終的なスコアが最も高い性格タイプを決定
  // Object.keys(scores)で性格タイプのキーを配列として取得し、それをreduceメソッドで処理
  // 各イテレーションで、2つの性格タイプのスコアを比較し、より高いスコアのタイプを残す
  // 最終的に最もスコアが高かった性格タイプのキーを返す


  return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
};

// 画像のパスを格納するオブジェクトを作成
const images = {
  warrior,
  wizard,
  hunter,
  healer,
};

// 英語の結果を日本語に変換するためのオブジェクト
const typeLabels = {
  warrior: "戦士",
  wizard: "魔法使い",
  hunter: "ハンター",
  healer: "ヒーラー",
};

const typeDescriptions = {
  warrior: "勇敢で頼もしい戦士タイプです。困難に立ち向かう勇気と、仲間を守る強さを持っています。自分やチームの為に率先してアクションをとることができ、周りの人からの信頼も厚いでしょう。一方で物事に対してメリットデメリットや敵味方で大別して判断してしまうことも。極端な思考にならないように気を付けましょう。",
  wizard: "知識が豊かで賢い魔法使いタイプです。高い学習能力と、独創的な思考をあわせ持っています。強い知的好奇心を持っていて何事にも興味を持って取り組めるのが強みです。反面、興味のないことには全く関心が湧かないこともあるため、無意識に問題解決のヒントを見逃さないように気を付けましょう。",
  hunter: "探求心が強く冷静なハンタータイプです。状況を素早く把握し、臨機応変に対応することができます。目的達成のための様々な工夫が苦にならず、集中して取り組むことができます。一度集中すると周りが見えなくなることもあるので、メリハリをつける意識をするといいでしょう。",
  healer: "優しくて思いやりのあるヒーラータイプです。人々を癒やし、和らげる力を持っています。争いごとが嫌いで平和主義的な思想の持主です。持ち前の共感力で人の痛みを理解し寄り添う事が出来ます。刺激の強い出来事があると感情が揺さぶられて疲れやすいため、自分なりの休息方法を持っておきましょう。",
};


const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(0); // プログレスバーの進捗を管理

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    setProgress((currentQuestionIndex + 1) / questions.length * 100); // 進捗を更新

    if (newAnswers.length === questions.length) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const restart = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setIsStarted(false);
    setProgress(0); // プログレスバーの進捗をリセット
  };
  const startGame = () => {
    setIsStarted(true);
  }

  // ゲームが開始されていない場合はスタート画面を表示
  if (!isStarted) {
    return (
      <div className='flame'>
        <h2>RPG適職診断テスト</h2>
        <img src={topimage} alt="" />
        <button onClick={startGame}>スタート</button>
      </div>
    );
  }

  return (
    <div className='flame'>
      {!showResult ? (
        <div className='questionPage'>
          <div className='progressBarBackground'></div>
           <div className="progressBar" style={{ width: `${progress}%` }}></div>
          <h3>{questions[currentQuestionIndex].text}</h3>
          <div className='qOptions'>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className='result'>
          <h2>診断結果</h2>
          <p className='message'>あなたは<br /><strong>{typeLabels[calculateResult(answers)]}</strong><br />タイプです。</p>
          <p className='caption'>{typeDescriptions[calculateResult(answers)]}</p>
          <img src={images[calculateResult(answers)]} alt="img" />
          <button onClick={restart}>もう一度やってみる</button>
        </div>
      )}
    </div>
  );
};

export default App;
