import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
} from "@faststore/ui";

import styles from "./customModalFooterSection.module.scss";
import { useState } from "react";

export default function CustomModalFooterSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.customModalFooterSection}>
      <h2>Modal Footer Section</h2>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal
        className={styles.customModal}
        isOpen={open}
        onDismiss={() => setOpen(false)}
        overlayProps={{ className: styles.customOverlay }}
      >
        <ModalHeader onClose={() => setOpen(false)} title="Add a review" />
        <ModalBody>Modal Body</ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpen(false)} variant="secondary">
            Cancel
          </Button>
          <Button>Submit your review</Button>
        </ModalFooter>
      </Modal>
    </section>
  );
}
