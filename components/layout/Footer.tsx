export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top footer__top--compact">
          <div className="footer__brand en">
            CUDO AX<span className="accent">.</span>
          </div>
          <div className="footer__group">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="mailto:hello@cudo-ax.co">hello@cudo-ax.co</a>
              </li>
              <li>
                <a href="tel:+82200000000">+82 2 0000 0000</a>
              </li>
              <li style={{ color: 'var(--fg-dim)', fontSize: 12 }}>
                서울특별시 강남구
                <br />
                테헤란로 152
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 CUDO AX 사업부. ALL RIGHTS RESERVED.</span>
          <span>DESIGN / ENG BY CUDO STUDIO</span>
        </div>
      </div>
    </footer>
  )
}
