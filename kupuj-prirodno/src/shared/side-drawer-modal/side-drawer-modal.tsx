import { createPortal } from "react-dom";
import ModalBackdrop from "../modal-backdrop/modal-backdrop";
import SideDrawerFrame from "./side-drawer-frame/side-drawer-frame";

interface SideDrawerModalProps{
    title:string,
    children?:React.ReactNode
}

const SideDrawerModal = ({title, children}:SideDrawerModalProps)=>{

    const modalBackdrop = document.getElementById("modal-backdrop") as HTMLElement;
    const sideDrawerModal = document.getElementById("modal-side-drawer") as HTMLElement;
    return <>
        {createPortal(<ModalBackdrop />, modalBackdrop)}
        {createPortal(<SideDrawerFrame title={title}>{children}</SideDrawerFrame>, sideDrawerModal)}
    </>
}

export default SideDrawerModal;