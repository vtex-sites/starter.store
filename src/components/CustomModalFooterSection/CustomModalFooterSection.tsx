import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
} from "@faststore/ui";

import styles from "./customModalFooterSection.module.scss";

export default function CustomModalFooterSection() {
  return (
    <section className={styles.customModalFooterSection}>
      <h2>Modal Footer Section</h2>
      <br />
      <Modal>
        <ModalHeader title="Add a review" />
        <ModalBody>Modal Body</ModalBody>
        <ModalFooter>
          <Button variant="secondary">Cancel</Button>
          <Button>Submit your review</Button>
        </ModalFooter>
      </Modal>
    </section>
  );
}
