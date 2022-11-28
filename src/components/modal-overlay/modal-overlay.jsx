import styles from './modal-overlay.module.css';

export function ModalOverlay({ onClose }) {

  const closeModalOverlay = (event) => {
    if (event.target.classList.contains(styles.overlay)) {
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={closeModalOverlay}>
    </div>
  )
}
