import { clientsRow1, clientsRow2, type Client } from '@/lib/data/clientsData'

function ClientChip({ client }: { client: Client }) {
  return (
    <div className="client-chip">
      <span className="en">{client.en}</span>
      <span style={{ color: 'var(--fg-dim)', margin: '0 10px', fontWeight: 400 }}>·</span>
      <span className="kr" style={{ fontSize: 14, color: 'var(--fg-dim)' }}>
        {client.kr}
      </span>
    </div>
  )
}

export default function Clients() {
  const doubled1 = [...clientsRow1, ...clientsRow1]
  const doubled2 = [...clientsRow2, ...clientsRow2]

  return (
    <section id="clients" className="clients" data-screen-label="05 Clients">
      <div className="container clients__head">
        <div className="clients__eyebrow en">CLIENTS</div>
        <h3 className="clients__title">
          공공·금융·기업 등 <strong>다양한 산업군</strong>의 파트너와 함께합니다
        </h3>
      </div>

      <div className="marquee">
        <div className="marquee__track">
          {doubled1.map((c, i) => (
            <ClientChip key={i} client={c} />
          ))}
        </div>
      </div>
      <div className="marquee marquee--reverse">
        <div className="marquee__track">
          {doubled2.map((c, i) => (
            <ClientChip key={i} client={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
