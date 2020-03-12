import React, { useState } from 'react';
import { Modal, Button } from 'semantic-ui-react';

const DeleteModal = ({ open, setModalOpen, deleteItem }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Modal open={open}>
            <Modal.Header>Delete Listing</Modal.Header>
            <Modal.Content>
                Are you sure you want to delete this listing?
            </Modal.Content>
            <Modal.Actions>
                <Button
                    loading={isLoading}
                    content="Yes"
                    negative
                    icon="check"
                    onClick={async () => {
                        setIsLoading(true);
                        await deleteItem();
                        setIsLoading(false);
                    }}
                />
                <Button
                    content="Cancel"
                    icon="close"
                    onClick={() => setModalOpen(false)}
                />
            </Modal.Actions>
        </Modal>
    );
};

export default DeleteModal;
