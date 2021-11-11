export default function ModalSectionGroup(props) {
  const { children, direction } = props;

  return (
    <div className="modal-sections" style={{
      flexDirection: direction
    }}>
      {children}
    </div>
  );
}

ModalSectionGroup.defaultProps = {
  direction: "row"
}
