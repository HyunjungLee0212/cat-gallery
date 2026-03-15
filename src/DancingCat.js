import React, { useState } from 'react';
import './DancingCat.css';

const SPEEDS = [
  { key: 'slow',   label: '🐢 느리게', multiplier: 2.0 },
  { key: 'normal', label: '😺 보통',   multiplier: 1.0 },
  { key: 'fast',   label: '⚡ 빠름',   multiplier: 0.35 },
];

function DancingCat() {
  const [speed, setSpeed] = useState('normal');
  const m = SPEEDS.find((s) => s.key === speed).multiplier;

  const style = {
    '--dance-dur':    `${0.6  * m}s`,
    '--head-dur':     `${0.6  * m}s`,
    '--ear-dur':      `${0.3  * m}s`,
    '--arm-dur':      `${0.6  * m}s`,
    '--leg-dur':      `${0.6  * m}s`,
    '--foot-dur':     `${0.6  * m}s`,
    '--tail-dur':     `${0.4  * m}s`,
    '--note-dur':     `${1.2  * m}s`,
    '--shadow-dur':   `${0.6  * m}s`,
  };

  return (
    <section className="dancing-section">
      <h2>🎵 춤추는 고양이</h2>

      {/* 속도 선택 버튼 */}
      <div className="speed-controls">
        {SPEEDS.map((s) => (
          <button
            key={s.key}
            className={`speed-btn ${speed === s.key ? 'active' : ''}`}
            onClick={() => setSpeed(s.key)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="dancing-stage">
        <svg
          viewBox="0 0 200 260"
          xmlns="http://www.w3.org/2000/svg"
          className="dancing-cat"
          style={style}
        >
          {/* 꼬리 */}
          <path
            className="cat-tail"
            d="M 115 190 Q 160 170 170 130 Q 180 100 155 95"
            stroke="#f0a500"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />

          {/* 몸통 */}
          <ellipse cx="100" cy="180" rx="45" ry="50" fill="#f0a500" className="cat-body" />

          {/* 왼쪽 다리 */}
          <rect className="cat-leg-left" x="65" y="218" width="18" height="30" rx="9" fill="#e09400" />
          {/* 오른쪽 다리 */}
          <rect className="cat-leg-right" x="117" y="218" width="18" height="30" rx="9" fill="#e09400" />

          {/* 왼쪽 발 */}
          <ellipse className="cat-foot-left" cx="74" cy="250" rx="12" ry="7" fill="#e09400" />
          {/* 오른쪽 발 */}
          <ellipse className="cat-foot-right" cx="126" cy="250" rx="12" ry="7" fill="#e09400" />

          {/* 왼쪽 팔 */}
          <rect className="cat-arm-left" x="42" y="155" width="16" height="38" rx="8" fill="#f0a500"
            transform="rotate(-20 50 174)" />
          {/* 오른쪽 팔 */}
          <rect className="cat-arm-right" x="142" y="155" width="16" height="38" rx="8" fill="#f0a500"
            transform="rotate(20 150 174)" />

          {/* 머리 */}
          <circle cx="100" cy="115" r="42" fill="#f0a500" className="cat-head" />

          {/* 왼쪽 귀 */}
          <polygon className="cat-ear-left" points="65,85 55,55 85,75" fill="#f0a500" />
          <polygon points="67,82 60,62 82,76" fill="#ffccaa" />

          {/* 오른쪽 귀 */}
          <polygon className="cat-ear-right" points="135,85 145,55 115,75" fill="#f0a500" />
          <polygon points="133,82 140,62 118,76" fill="#ffccaa" />

          {/* 왼쪽 눈 */}
          <ellipse className="cat-eye-left" cx="86" cy="112" rx="7" ry="8" fill="#222" />
          <circle cx="88" cy="110" r="2" fill="white" />
          {/* 오른쪽 눈 */}
          <ellipse className="cat-eye-right" cx="114" cy="112" rx="7" ry="8" fill="#222" />
          <circle cx="116" cy="110" r="2" fill="white" />

          {/* 코 */}
          <ellipse cx="100" cy="124" rx="5" ry="4" fill="#ff8888" />

          {/* 입 */}
          <path d="M 95 128 Q 100 134 105 128" stroke="#cc6666" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* 수염 왼쪽 */}
          <line x1="55" y1="120" x2="88" y2="124" stroke="#fff" strokeWidth="1.5" opacity="0.8" />
          <line x1="55" y1="126" x2="88" y2="127" stroke="#fff" strokeWidth="1.5" opacity="0.8" />
          <line x1="58" y1="132" x2="88" y2="130" stroke="#fff" strokeWidth="1.5" opacity="0.8" />

          {/* 수염 오른쪽 */}
          <line x1="145" y1="120" x2="112" y2="124" stroke="#fff" strokeWidth="1.5" opacity="0.8" />
          <line x1="145" y1="126" x2="112" y2="127" stroke="#fff" strokeWidth="1.5" opacity="0.8" />
          <line x1="142" y1="132" x2="112" y2="130" stroke="#fff" strokeWidth="1.5" opacity="0.8" />

          {/* 배 무늬 */}
          <ellipse cx="100" cy="185" rx="22" ry="28" fill="#ffddaa" opacity="0.7" />

          {/* 음표 */}
          <text className="music-note note1" x="155" y="90" fontSize="20" fill="#f0a500">♪</text>
          <text className="music-note note2" x="25" y="80" fontSize="16" fill="#f0c040">♫</text>
          <text className="music-note note3" x="165" y="60" fontSize="14" fill="#ffdd88">♩</text>
        </svg>

        {/* 그림자 */}
        <div className="cat-shadow" style={style} />
      </div>
    </section>
  );
}

export default DancingCat;
