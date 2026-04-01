export const metadata = { robots: 'noindex, nofollow' };

export default function CreatorHub() {
  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ textTransform: 'uppercase', margin: 0 }}>THE RDI CREATOR HUB</h1>
        <h2 style={{ textTransform: 'uppercase', margin: 0 }}>The infrastructure for refined talent. A dedicated ecosystem for active TikTok Live and BIGO Live hosts.</h2>
      </div>
      <section style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#FF0000', textTransform: 'uppercase' }}>Agency Enrollment</h3>
        <div>
          <h4>TikTok Live (US Region)</h4>
          <a href="https://www.tiktok.com/t/ZTkjDy9aa/" style={{ backgroundColor: '#FF0000', color: '#FFFFFF', padding: '10px 15px', textDecoration: 'none', borderRadius: '5px' }}>Get Your TikTok Invitation Code</a>
          <p>Settings and privacy &gt; Creator tools &gt; LIVE Center &gt; Creator Network Center.</p>
          <div>
            <img src="/images/language_english.jpg" alt="TikTok Instructions" />
            <p>Step-by-step caption here.</p>
          </div>
          <p>Copy the invitation code on your screen and share it with the Creator Network Manager.</p>
        </div>
        <div>
          <h4>Bigo Live</h4>
          <a href="#" style={{ textTransform: 'uppercase', marginRight: '10px' }}>Join Bigo Agency (US/Canada)</a>
          <a href="#" style={{ textTransform: 'uppercase' }}>Join Bigo Agency (UK/Ireland)</a>
        </div>
      </section>
      <section style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#FF0000', textTransform: 'uppercase' }}>Downloads</h3>
        <a href="#" style={{ textDecoration: 'none', marginRight: '15px' }}>Download Bigo Live</a>
        <a href="#" style={{ textDecoration: 'none' }}>Download TikTok</a>
      </section>
      <section style={{ marginBottom: '40px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div style={{ backgroundColor: '#2f2f2f', padding: '20px', borderRadius: '10px' }}>Training</div>
        <div style={{ backgroundColor: '#2f2f2f', padding: '20px', borderRadius: '10px' }}>Payouts & Targets</div>
        <div style={{ backgroundColor: '#2f2f2f', padding: '20px', borderRadius: '10px' }}>Weekly Tips</div>
        <div style={{ backgroundColor: '#2f2f2f', padding: '20px', borderRadius: '10px' }}>Support Form</div>
        <div style={{ backgroundColor: '#2f2f2f', padding: '20px', borderRadius: '10px' }}>Policy & Expectations</div>
        <div style={{ backgroundColor: '#2f2f2f', padding: '20px', borderRadius: '10px' }}>Platform Resources</div>
      </section>
      <section>
        <h3 style={{ textTransform: 'uppercase' }}>Standards</h3>
        <ul>
          <li>Consistency</li>
          <li>Professionalism</li>
          <li>Coachability</li>
          <li>Communication</li>
          <li>Accountability</li>
        </ul>
      </section>
    </div>
  );
}