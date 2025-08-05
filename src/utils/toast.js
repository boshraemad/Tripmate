import toast from 'react-hot-toast';

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: 'top-right',
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    position: 'top-right',
  });
};

export const showLoadingToast = (message) => {
    return toast.loading(message, {
      position: 'top-right',
    });
  };

  export const dismissToast = (toastId) => {
    toast.dismiss(toastId);
  };