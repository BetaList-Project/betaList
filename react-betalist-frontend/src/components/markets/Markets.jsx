import "./Markets2.css";
import "./marketComponents/DTechnology"





const Markets = () => {
  return (
    <div>
      <header class="visualHeader">
        <h1 class="visualHeader__title">Markets</h1>
        <h2 class="visualHeader__subtitle">Browse startups by industry</h2>
      </header>
      <section className="content_wrapper">
        <div className="content">
          <ul className="markets">
            <li>
              <a className="tag tag--card" href={`/market/marketComponents/DTecnology.jsx`} style={{backgroundColor : '#00c294'}}>
                <div className="tag__icon">👀</div>
                &nbsp;3D Technology
                <div className="tag__count">21</div>
              </a>
            </li>
            <li> 
              <a class="tag tag--card" href="/markets/accounting" style={{backgroundColor : '#f1c30d'}}>
                <div class="tag__icon">💰</div>
                &nbsp;Accounting
                <div class="tag__count">63</div>
              </a>
            </li>
            <li>
              <a class="tag tag--card" href="/markets/active-lifestyle" style={{backgroundColor : '#cfacd2'}}>
                <div class="tag__icon">🏃</div>
                &nbsp;Active Lifestyle
                <div class="tag__count">98</div>
              </a>
            </li>
            <li>
              <a class="tag tag--card" href="/markets/ad-targeting" style={{backgroundColor : '#000000'}}>
                <div class="tag__icon">🎯</div>
                &nbsp;Ad Targeting
                <div class="tag__count">33</div>
              </a>
            </li>
            <li>
              <a class="tag tag--card" href="/markets/adventure-travel" style={{backgroundColor : '#acd2cc'}}>
                <div class="tag__icon">🛩</div>
                &nbsp;Adventure Travel
                <div class="tag__count">112</div>
              </a>
            </li>
            <li>
              <a class="tag tag--card" href="/markets/advertising" style={{backgroundColor : '#bf3829'}}>
                <div class="tag__icon">📢</div>
                &nbsp;Advertising
                <div class="tag__count">184</div>
              </a>
            </li>
            <li>
              <a class="tag tag--card" href="/markets/advertising-exchanges" style={{backgroundColor : '#c9acd2'}}>
                <div class="tag__icon">🗣</div>
                &nbsp;Advertising Exchanges
                <div class="tag__count">9</div>
              </a>
            </li>
            <li>
              <a class="tag tag--card" href="/markets/advertising-platforms" style={{backgroundColor : '#acd2ac'}}>
                <div class="tag__icon">💻</div>
                &nbsp;Advertising Platforms
                <div class="tag__count">75</div>
              </a>
            </li>
            <li>
              <a class="tag tag--card" href="/markets/advice" style={{backgroundColor : '#acd2b9'}}>
                <div class="tag__icon">🗣</div>
                &nbsp;Advice
                <div class="tag__count">30</div>
              </a>
            </li>
            <li>
              <a class="tag tag--card" href="/markets/aerospace" style={{backgroundColor : '#acd2c8'}}>
                <div class="tag__icon">🛩</div>
                &nbsp;Aerospace
                <div class="tag__count">2</div>
              </a>
            </li>
            <li>
              <a class="tag tag--card" href="/markets/age-groups" style={{backgroundColor : '#d2c0ac'}}>
                <div class="tag__icon">👨‍👩‍👧</div>
                &nbsp;Age Groups
                <div class="tag__count">1</div>
              </a>
            </li>
            <li>
              <a class="tag tag--card" href="/markets/agriculture" style={{backgroundColor : '#d2acb4'}}>
                <div class="tag__icon">🐄</div>
                &nbsp;Agriculture
                <div class="tag__count">7</div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Markets;
