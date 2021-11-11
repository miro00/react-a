export default function ModalSection(props) {
  const { children, w } = props
  return (
    <section className="modal-section" style={{
      width: w
    }}>
      {children}
    </section>
  )
}
