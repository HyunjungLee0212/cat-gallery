import React from 'react';
import './App.css';
import DancingCat from './DancingCat';

const cats = [
  { id: 1, desc: '무슨 생각을 하고 있을까요? 아마 밥 생각...' },
  { id: 2, desc: '이 눈빛... 간식을 원하는 눈빛이 분명합니다.' },
  { id: 3, desc: '하루 16시간 수면, 그것이 고양이의 삶입니다.' },
  { id: 4, desc: '창문 밖을 보며 세상을 관찰 중입니다.' },
  { id: 5, desc: '박스만 있으면 어디든 집이 되는 고양이.' },
  { id: 6, desc: '꾹꾹이는 사랑의 표현입니다. 아프지만요.' },
];

const facts = [
  '고양이는 하루 평균 12~16시간 잠을 잡니다.',
  '고양이의 코 문양은 사람의 지문처럼 모두 다릅니다.',
  '고양이는 단맛을 느끼지 못합니다. 단맛 수용체가 없어요.',
  '고양이의 귀는 180도까지 회전할 수 있습니다.',
  '고양이의 그루밍은 체온 조절과 스트레스 해소 역할을 합니다.',
  '고양이는 높은 곳에서 떨어져도 몸을 돌려 착지합니다.',
];

function CatCard({ cat }) {
  return (
    <div className="card">
      <img
        src={`https://cataas.com/cat?width=400&height=300&_=${cat.id}`}
        alt={`고양이 ${cat.id}`}
      />
      <div className="card-body">
        <h3>오늘의 고양이 #{cat.id}</h3>
        <p>{cat.desc}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 고양이 갤러리</h1>
        <p>세상에서 가장 귀여운 존재들</p>
      </header>

      <div className="gallery">
        {cats.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>

      <DancingCat />

      <section className="ascii-section">
        <h2>🐾 ASCII 고양이</h2>
        <pre className="ascii-art">{`  /\\_____/\\
 (  o   o  )
 ( =  ^  = )
  )         (
 (           )
( (  )   (  ) )
(__(__)___(__)__)`}</pre>
      </section>

      <section className="fact-box">
        <h2>🐈 고양이 잡학 사전</h2>
        <div className="facts">
          {facts.map((fact, i) => (
            <div key={i} className="fact">{fact}</div>
          ))}
        </div>
      </section>

      <footer className="app-footer">🐾 🐾 🐾</footer>
    </div>
  );
}

export default App;
