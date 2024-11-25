export const inputify = (cb) => {
    return (e) => cb(e.target.value);
  };