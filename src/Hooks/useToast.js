import {toast} from 'react-toastify';

function useToast() {
  const customToast = (message,type) => {
    if(type==='success'){
      toast.success(message,{
        position: "bottom-center",
        autoClose: 1200,
        pauseOnHover: false,
        style:{fontSize:'1.6rem'}
      })
    }
    else if(type==="error"){
      toast.error(message,{
        position: "bottom-center",
        autoClose: 1200,
        pauseOnHover: false,
        style:{fontSize:'1.6rem'}
      })
    }
  }

  return {customToast};
}
export {useToast};