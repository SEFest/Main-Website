// ModalComponent.tsx
import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { Course } from '@/interfaces/course'
import { Paper } from '@mui/material'

interface ModalProps {
  open: boolean
  onClose: () => void
  selectedItem: Course | null
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

const ModalComponent: React.FC<ModalProps> = ({ open, onClose, selectedItem }) => {
  const handleClose = () => {
    onClose()
  }
  const handleOpenPDF = () => {
    window.open('/sample.pdf', '_blank')
  }
  return (
    <>
      <Dialog
        open={open}
        PaperComponent={PaperComponent}
        TransitionComponent={Transition}
        keepMounted
        // sx={{ margin: '24rem' }}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{selectedItem?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {selectedItem?.information}
            {/* Add more properties as needed */}
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <ul>
              {selectedItem?.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            For further information please consult our rule book.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenPDF}>View Rule Book</Button>
        </DialogActions>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
const PaperComponent: React.FC = (props) => <Paper {...props} sx={{ width: '80vw', maxWidth: 'md' }} />
export default ModalComponent
